# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for GitHub Pages |
| `npm run build:cloudflare` | Build for Cloudflare Workers |
| `npm run preview` | Preview GitHub Pages build |
| `npm run preview:cloudflare` | Preview Cloudflare build with Wrangler |
| `npm run deploy:cloudflare` | Build and deploy to Cloudflare |

## Architecture

**Dual Deployment Setup:**
- `astro.config.mjs` → GitHub Pages (static, base path: `/{GITHUB_REPO}`)
- `astro.config.cloudflare.mjs` → Cloudflare Workers (SSR, output: server)

**Path Handling (Critical):**
- Use `getPath()` from `src/utils/paths.ts` for ALL internal links
- Handles base path differences between dev (`/`) and GitHub Pages (`/repo-name/`)
- Example: `<a href={getPath('/blog')}>` instead of `<a href="/blog">`

**Content Collections:**
- Blog posts: `src/content/blog/*.md`
- Schema defined in `src/content.config.ts` (title, description, pubDate, heroImage)

**Global Constants:** `src/consts.ts` (SITE_TITLE, SITE_DESCRIPTION)

**CMS:** Decap CMS at `public/admin/` (config: `public/admin/config.yml`)

## Workflows

- Development rules: `./.claude/workflows/development-rules.md`
- Primary workflow: `./.claude/workflows/primary-workflow.md`
- Orchestration protocols: `./.claude/workflows/orchestration-protocol.md`
- Documentation management: `./.claude/workflows/documentation-management.md`

**IMPORTANT:** Follow development rules in `./.claude/workflows/development-rules.md`.
**IMPORTANT:** Read `./README.md` before implementation.
**IMPORTANT:** For `YYMMDD` dates, use `bash -c 'date +%y%m%d'`.

## Documentation

Docs in `./docs/`: project-overview-pdr.md, code-standards.md, codebase-summary.md, design-guidelines.md, deployment-guide.md, system-architecture.md, project-roadmap.md