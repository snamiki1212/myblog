# Lunash

Lunash is Nash's blog about tech, life, etc.

## Installation

```zsh
cp .env.example .env
pnpm i
pnpm dev
```

## Tech Stacks

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Daisy UI](https://daisyui.com/): UI Component
- [Remeda](https://remedajs.com/): TypeScript functional programming helper
- [Pagefind](https://pagefind.app/): Static search lib
- [Cloudflare Pages](https://www.cloudflare.com/): CDN / Deploy

## Deploy Flow

```mermaid
flowchart LR
  Local -- Code Push --> GitHub -- Hooks and Run CI --> Cloudflare -- Deploy --> Done
```

## LICENSE

© 2019-2024 Shun Namiki a.k.a Nash
