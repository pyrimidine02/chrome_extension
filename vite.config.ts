import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx }   from '@crxjs/vite-plugin'
import manifest from './public/manifest.json'

export default defineConfig({
    plugins: [
        react(),
        crx({ manifest })   // manifest의 service_worker/content_scripts를 보고 ts → js 번들링
    ],
    build: {
        rollupOptions: {
            input: {
                popup:   'src/popup/index.html',
                options: 'src/options/index.html'
            },
            output: {
                entryFileNames: '[name].js'
            }
        }
    }
})
