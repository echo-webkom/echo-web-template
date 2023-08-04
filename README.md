# echo Web template

A simple web template for build websites with Next.js using echo Webkom's tech stack.

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer)
- [pnpm](https://pnpm.io/) (v6 or newer)
- [Docker](https://www.docker.com/) (v20 or newer)

### Installation

1. Clone the repository

```bash
git clone git@github.com:echo-webkom/web-template.git
```

2. Install dependencies

```bash
pnpm install
```

3. Copy `.env.example` to `.env` and fill in the values

```bash
cp .env.example .env
```

4. Start the database

```bash
pnpm db:up
```

Will run the database in the background in a Docker container. Available at `localhost:5432`.

5. Run the migrations

```bash
pnpm db:deploy
```

6. Start the development server

```bash
pnpm dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Commands

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm db:up` - Build and start the database
- `pnpm db:down` - Stop and remove the database
- `pnpm db:migrate` - Create a new migration
- `pnpm db:deploy` - Run all pending migrations
- `pnpm db:seed` - Seed the database

### Project structure

- `prisma` - Prisma schema and seed script
  - `migrations` - Database migrations generated by Prisma
- `public` - Static assets
- `src` - Source code
  - `components` - React components
  - `app` - Page router using Next.js' app-router (SSR) (https://nextjs.org/docs/app)
  - `styles` - Global styles
  - `lib`
    - `db` - Prisma client
    - `utils` - Utility functions
