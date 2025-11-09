import { createServer } from 'node:net';
import { spawn } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

const DEFAULT_PORT = Number.parseInt(process.env.PORT ?? '3000', 10);
const MAX_OFFSET = 20;

function tryListen(port, host) {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();

    const cleanup = () => {
      server.removeAllListeners();
    };

    server.once('error', (error) => {
      cleanup();
      if (error?.code === 'EADDRINUSE') {
        resolve(false);
        return;
      }
      if (error?.code === 'EACCES' || error?.code === 'EPERM') {
        reject(error);
        return;
      }
      resolve(false);
    });

    server.once('listening', () => {
      server.close(() => {
        cleanup();
        resolve(true);
      });
    });

    server.listen({ port, host });
  });
}

async function isPortFree(port) {
  const hosts = ['::', '0.0.0.0', '127.0.0.1'];
  for (const host of hosts) {
    try {
      const available = await tryListen(port, host);
      if (available) {
        return true;
      }
    } catch (error) {
      if (error?.code === 'EACCES' || error?.code === 'EPERM') {
        throw Object.assign(
            new Error(`Insufficient privileges to bind to port ${port} on host ${host}.`),
            { cause: error },
        );
      }
    }
  }
  return false;
}

async function findAvailablePort(startPort) {
  for (let offset = 0; offset <= MAX_OFFSET; offset += 1) {
    const candidate = startPort + offset;
    // eslint-disable-next-line no-await-in-loop -- Ports must be checked sequentially.
    if (await isPortFree(candidate)) {
      return candidate;
    }
  }
  throw new Error(
      `Unable to find available port starting from ${startPort} within ${MAX_OFFSET + 1} attempts.`,
  );
}

async function main() {
  const port = await findAvailablePort(DEFAULT_PORT);
  if (port !== DEFAULT_PORT) {
    console.log(`Port ${DEFAULT_PORT} in use. Falling back to ${port}.`);
  } else {
    console.log(`Starting server on port ${port}.`);
  }

  const nextBin = path.resolve('node_modules', '.bin', 'next');
  const child = spawn(nextBin, ['start', '-p', String(port)], {
    stdio: 'inherit',
    env: { ...process.env, PORT: String(port) },
  });

  const terminate = (signal) => {
    if (child.killed) {
      process.exit(0);
    }
    child.kill(signal);
  };

  process.on('SIGINT', terminate);
  process.on('SIGTERM', terminate);

  child.on('exit', (code, signal) => {
    if (signal) {
      process.exit(0);
    }
    process.exit(code ?? 0);
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
