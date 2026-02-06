import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    resolve: {
            alias: {
                ziggy: 'ziggy-js',
                "bootstrap": path.join(__dirname, "node_modules/") + "bootstrap/dist/js/bootstrap.min.js",
                find: "@vue/runtime-core",
                replacement: "@vue/runtime-core/dist/runtime-core.esm-bundler.js",
            }
          },
    plugins: [
        laravel({
            input: ['resources/css/app.css',
                 'resources/js/auth.js',
                 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
        },
    },
    server: {
        watch: {
            ignored: ['**/storage/framework/views/**'],
        },
    },
});
