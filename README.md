# Versalearn Web Client
Versatile AI ready for assistance.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## My Nuxt Practice
- Put the logic on the page level not the component level. Use `slot` to put the logic from outside the component (page level).
- What can be included inside components is property and style, not the logic.
- Reusable component can be achieved by nesting smaller components inside larger component.
- Only use store if the state is gonna be used in multiple files.


## Caveat
- Disable adblocker as it would throw a cannot load module warning.  Making your variable/function null or undefined. [reference](https://stackoverflow.com/questions/45879671/only-on-firefox-loading-failed-for-the-script-with-source)
- For data fetching, use `$fetch` in client side and `useFetch` in server side. This is because `$fetch` will be performed twice if it used in components without wrapper (not inside a function)
- Composables is run both in server and client.


## Useful blog
- [What should be plugin, composable and store](https://robconery.com/frontend/what-should-be-a-plugin-vs-a-composable-vs-a-store-in-nuxt/)
- [Nuxt SSR Optimizing Tips](https://vueschool.io/articles/vuejs-tutorials/nuxt-ssr-optimizing-tips/)


## Nuxt Program Flow
The code execution order in nuxt application:
- Plugins
- Middleware
- Component Setup


## Response Structure
Main structure of response contains serveral main keys:
- `status` - HTTP Status Code
- `context` - Informations about current request
- `content` - Body of the response

```typescript
let response: {
    status: number,
    context: object,
    content: object
}
```

## Plugins
- [Firebase](https://firebase.google.com/) - Authentication
- [Fontawesome](https://fontawesome.com/) - Icon