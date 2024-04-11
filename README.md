# React Boilerplate

This is a boilerplate for personal projects. The technologies used are:

- [Vite](https://vitejs.dev/)  with [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/en/main)
- [TanStack Query](https://tanstack.com/query/latest)
- [Husky](https://typicode.github.io/husky/) + [Commitlint](https://commitlint.js.org/#/)
- [PNPM](https://pnpm.io/)

## Folder Structure Example

```md
src/
├── components/
│   ├── Container/
│   │   ├── Container.tsx
│   │   └── style.css
│   └── index.ts
├── pages/
│   ├── Home/
│   │   ├── Components/
│   │   │   ├── TodoList.tsx
│   │   │   └── TodoList.test.tsx
│   │   ├── Home.tsx
│   │   ├── Home.test.tsx
│   │   └── style.css
│   └── index.ts
├── providers/
│   ├── Providers.tsx
│   ├── ReactRouter.tsx
│   └── ...
├── services/
│   ├── clients/
│   │   └── todo-client.ts
│   ├── mutations/
│   │   └── useCreateTodos.tsx
│   └── queries/
│       └── useTodos.tsx
├── test/
│   └── setup.ts
├── contexts/
│   └── AuthContext.tsx
└── hooks/
    └── useAuth.tsx
```

- `components`: all components used throughout the entire app
  - every component will have a test file and a style file
- `pages`: all the pages that are used in the app
  - every page will have a test file, a style file, and a component folder with exclusive components for that page
- `providers`: all providers imported in a single provider file
- `services`: everything related to API calls
  - `clients`: folder with instances of Axios for each API client
  - `mutations`: react query mutations
  - `queries`: react query queries
- `test`: files and mocks for setting up tests.
- `contexts`: all contexts for the React app.
- `hooks`: every globally used hook.
