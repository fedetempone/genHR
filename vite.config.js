// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // carpeta de salida de produccion 
    outDir: 'dist',
    // configuraciones de rollup para optimizar bundles
    rollupOptions: {
      output: {
        // separo librerias de node_modules en el bundle vendor
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // mantener nombre de los archivos un poco mas predecibles
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // para reducirr la advertenicia de 500kb a 600
    chunkSizeWarningLimit: 600, // aumenta límite de advertencia a 600 KB
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // alias para imports mas comodos
    },
  },
});
