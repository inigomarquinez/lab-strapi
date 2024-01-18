# lab-strapi

Project to test [strapi](https://strapi.io/) features.

It is made of 5 modules:

- `strapi`:
  - `strapi-server-dev`: the strapi server DEV instance
  - `strapi-server-prod`: the strapi server PROD instance
- `payloadcms`:
  - `payloadcms-server-dev`: the payloadcms server DEV instance
  - `payloadcms-server-prod`: the payloadcms server PROD instance
- `next-app`: the frontend application (based on [next.js](https://nextjs.org/))
- `cms-server`: the backend application (based on [nestjs](https://nestjs.com/))
- `localstack`: the localstack instance (based on [localstack](https://www.localstack.cloud/))

## How to run in development mode

We're using [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces)

### Install dependencies

From the root folder, just run:

```bash
npm install
```

### Configure the services (.env files)

- Go to `localstack` folder copy and rename the `.env.example` file to `.env`
- Go to `mongo` folder copy and rename the `.env.example` file to `.env`
- Go to `strapi/strapi-dev` folder copy and rename the `.env.example` file to `.env`
- Go to `strapi/strapi-prod` folder copy and rename the `.env.example` file to `.env`
- Go to `payloadcms/payloadcms-dev` folder copy and rename the `.env.example` file to `.env`
- Go to `payloadcms/payloadcms-prod` folder copy and rename the `.env.example` file to `.env`

### Run the services

```bash
cd strapi/strapi-server-dev && npm run develop
cd strapi/strapi-server-prod && npm run develop
cd next-app && npm run dev
cd cms-service && npm run start:dev
cd payloadcms/payloadcms-dev && npm run dev
cd payloadcms/payloadcms-prod && npm run dev
cd cms-service && npm run start:dev
```

- The strapi admin for DEV will be available at http://localhost:1337/admin
- The strapi admin for PROD will be available at http://localhost:1338/admin
- The payloadcms admin for DEV will be available at http://localhost:2337/admin
- The payloadcms admin for PROD will be available at http://localhost:2338/admin
- The web app will be available at http://localhost:3000
- The CMS service will be available at http://localhost:3001

## Useful links

### Strapi

- https://strapi.io/blog/demystifying-strapi-s-populate-and-filtering

### PayloadCMS

- https://payloadcms.com/docs/production/deployment#file-storage
