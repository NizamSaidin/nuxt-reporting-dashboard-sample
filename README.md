# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup
1. Clone the repository:

```bash
git clone https://github.com/NizamSaidin/nuxt-reporting-dashboard-sample.git
cd nuxt-reporting-dashboard-sample
```

2. Copy the `.env.example` file to `.env` and update the environment variables as needed:

```bash
cp .env.example .env
```

3. Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

4. Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Design & Technical Decisions
As Nuxt shares a similar structure & design with Next.js, I found it easy to get started and apply similar patterns. The setup I used for this project is heavily inspired by my previous Next.js project, making the transition smooth. Since dependencies like Tailwind, and ShadCN are supported across both ecosystems, it really help in maintaining a consistent development & codebases structure across different frameworks, making it easier to get started & get familiar with the framework.

Here are a list of technical setup i've choose to build this project.

1. Using [Nuxt](https://nuxt.com/) as the main framework since it’s built on Vue 3 with Composition API enabled by default. Using Nuxt, it help in structuring & organizing the codebase better. It also has built-in SSR support by default which can improve initial page loading time & using directory-based routing that i find it easy to adapt, making it easier to manage app routes. 
2. Using [shadcn-vue](https://www.shadcn-vue.com/) to build consistent and accessible UI components. It offers customizable primitives that support a design system approach.
3. Using [Tailwind CSS v4](https://tailwindcss.com/) for UI styling as it helps in styling UI components faster using utility classes.
4. Using feature-based directory structure to organize the codebase for a clear separation of code for each feature to ensure scalability and maintainability.
   1. `/features` directory contains all the features of the application, each feature has its own directory with components, composables, models, api, services, etc.
   2. `/components` directory contains global reusable components that can be used across the application.
5. Using a simple common dashboard layout with navbar to provide a consistent UI accross pages.

## Tradeoffs due to time/scope constraints
1. Not handling loader & error states in the UI for API calls.

## Future Improvements
1. Implement loader & error states in the UI for API calls.
3. Add unit tests for components to ensure code quality and reliability.