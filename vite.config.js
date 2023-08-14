import { defineConfig } from 'vite';
import elmPlugin from 'vite-plugin-elm';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        elmPlugin.plugin()
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./setupTests.js"
    }
});
