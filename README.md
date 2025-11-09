# CV/Portfolio — Agents Docs

This package contains **AGENTS.md** and **sub‑agent specs** to let coding agents (Codex CLI, etc.) build your CV/Portfolio front‑end quickly.

## How to use
1. Place the contents at your repository root.
2. Run your coding agent in the repo root. Instruct it to read **AGENTS.md** first.
3. Ask it to scaffold Next.js + TS + Tailwind + shadcn/ui + framer‑motion, then implement local **REST** APIs that read `/content/*.yml`.

## Next steps (suggested prompt)
```
목표: AGENTS.md에 맞춰 CV/포트폴리오 구현
제약: REST만 사용(그래프QL 금지), 영/한 JSDoc, 성능·접근성 기준 충족
산출물: 동작 페이지 + 테스트 (Vitest/Playwright) 그린
```
