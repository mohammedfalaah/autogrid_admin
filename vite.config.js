import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    port: 3007, // you can replace this port with any port
  },
  base: '/',
  build: {
    outDir: 'dist', // Ensure the output is placed in the 'dist' folder in the project root
    emptyOutDir: true, // Empty the dist folder before building
  },
});
