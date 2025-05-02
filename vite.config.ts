import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg'
    })
  ],
  server: {
    host: '0.0.0.0', // This allows the server to be accessed from the local network
    port: 5173 // Ensure the correct port is being used
  },
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: resolve(root, 'assets')
      },
      {
        find: '@components',
        replacement: resolve(root, 'components')
      },
      {
        find: '@pages',
        replacement: resolve(root, 'pages')
      },
      {
        find: '@',
        replacement: resolve(root)
      }
    ]
  }
});
