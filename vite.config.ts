import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from '@crxjs/vite-plugin'
import manifest from './public/manifest.json'

// vite.config.ts
export default defineConfig({
    plugins: [ react(), crx({ manifest }) ],
    build: {
        rollupOptions: {
            input: {
                popup:      'src/popup/index.html',
                options:    'src/options/index.html',   // ← 이 HTML을 읽어서
                background: 'src/background.ts',        // background.ts → background.js
                content:    'src/content.ts'            // content.ts → content.js
            },
            output: {
                entryFileNames: '[name].js',            // 해시 없이 [name].js 생성
            }
        }
    }
})

