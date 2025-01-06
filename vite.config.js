import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: "/zun-js-vanilla",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                todo: resolve(__dirname, 'todo.html'),
                calculadora: resolve(__dirname, 'calculadora.html'),
                form: resolve(__dirname, 'form.html'),
                ecommerce: resolve(__dirname, 'ecommerce.html'),
                challenges: resolve(__dirname, 'challenges.html'),
            },
        },
    }
});