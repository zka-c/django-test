---
name: Maintenance
slug: maintenance-page
description: This template shows how to quickly trigger a maintenance page using Edge Config
framework: Next.js
useCase:
  - Edge Functions
  - Edge Config
css: Tailwind
deployUrl: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fedge-functions%2Fmaintenance-page&project-name=maintenance-page&repo-name=maintenance-page
demoUrl: https://edge-maintenance-page.vercel.app/
relatedTemplates:
  - feature-flag-apple-store
  - nextjs-boilerplate
---

# maintenance-page example

This example shows how to implement a maintenance page on the edge

## Demo

https://edge-maintenance-page.vercel.app

## How to Use

You can choose from one of the following two methods to use this repository:

### One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/examples/tree/main/edge-functions/maintenance-page&project-name=maintenance-page&repository-name=maintenance-page)

### Clone and Deploy

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel/examples/tree/main/edge-functions/maintenance-page
# or
yarn create next-app --example https://github.com/vercel/examples/tree/main/edge-functions/maintenance-page
```

Copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

This example connects to a default Edge Config via the `EDGE_CONFIG` environment variable. You can replace it with your own Edge Config to be able to flip maintenance mode on or off. If you use your own Edge Config, it needs to have this content

```json
{ "isInMaintenanceMode": true }
```

Next, run Next.js in development mode:

```bash
npm install
npm run dev

# or

yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=edge-middleware-eap) ([Documentation](https://nextjs.org/docs/deployment)).
