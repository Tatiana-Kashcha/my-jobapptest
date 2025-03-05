import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  // base: "/my-jobapptest/", // коли деплой на gh-pages
});

// "homepage": "https://tatiana-kashcha.github.io/my-jobapptest/",
// коли деплой на gh-pages,
// "scripts": { "deploy": "gh-pages -d dist",
// це для package.json файла
// для деплоя на vercel видалити файл .github (дивись темплейт)
