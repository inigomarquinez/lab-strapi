# lab-strapi

Project to test [strapi](https://strapi.io/) features.

It is made of 4 modules:

- `strapi`:
  - `strapi-server-dev`: the strapi server DEV instance
  - `strapi-server-pro`: the strapi server PRO instance
- `payloadcms`:
  - `payloadcms-server-dev`: the payloadcms server DEV instance
  - `payloadcms-server-pro`: the payloadcms server PRO instance
- `next-app`: the frontend application (based on [next.js](https://nextjs.org/))
- `cms-server`: the backend application (based on [nestjs](https://nestjs.com/))

## How to run in development mode

### Install dependencies

```bash
cd strapi/strapi-server-dev && npm install
cd strapi/strapi-server-pro && npm install
cd next-app && npm install
cd cms-service && npm install
```

### Configure the services

- Go to each Strapi instance and set different ports in the `.env` files
  - `PORT=1337` for strapi-server-dev
  - `PORT=1338` for strapi-server-pro

### Run the services

```bash
cd strapi/strapi-server-dev && npm run develop
cd strapi/strapi-server-pro && npm run develop
cd next-app && npm run dev
cd cms-service && npm run start:dev
```

- The strapi admin for DEV will be available at http://localhost:1337/admin
- The strapi admin for PRO will be available at http://localhost:1338/admin
- The web app will be available at http://localhost:3000
- The CMS service will be available at http://localhost:3001

## Useful links

### Strapi

- https://strapi.io/blog/demystifying-strapi-s-populate-and-filtering

### PayloadCMS

- https://payloadcms.com/docs/production/deployment#file-storage
