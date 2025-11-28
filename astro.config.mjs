// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// For GitHub Pages: Update these values
// - GITHUB_USERNAME: your GitHub username
// - GITHUB_REPO: your repository name
// For local dev, set base to '/' via ASTRO_BASE env variable
const isDev = process.env.NODE_ENV === 'development';
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'vibery-studio';
const GITHUB_REPO = process.env.GITHUB_REPO || 'astro-starter';

// https://astro.build/config
export default defineConfig({
	site: isDev ? 'http://localhost:4321' : `https://${GITHUB_USERNAME}.github.io`,
	base: process.env.ASTRO_BASE || (isDev ? '/' : `/${GITHUB_REPO}`),
	integrations: [mdx(), sitemap(), tailwind()],
});
