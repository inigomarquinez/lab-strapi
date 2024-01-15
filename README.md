# lab-strapi

Project to test [strapi](https://strapi.io/) features.

It is made of 3 modules:

- `strapi-server`: the strapi server
- `next-app`: the frontend application (based on [next.js](https://nextjs.org/))
- `cms-server`: the backend application (based on [nestjs](https://nestjs.com/))

## How to run in development mode

### Install dependencies

```bash
cd strapi-server && npm install
cd next-app && npm install
cd cms-service && npm install
```

### Run the services

```bash
cd strapi-server && npm run develop
cd next-app && npm run dev
cd cms-service && npm run start:dev
```

- The strapi admin will be available at http://localhost:1337/admin
- The web app will be available at http://localhost:3000
- The CMS service will be available at http://localhost:3001
