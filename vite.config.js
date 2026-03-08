import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            ziggy: 'ziggy-js',
        }
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css',
                 'resources/js/auth.jsx',
                 'resources/js/app.jsx'],
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
