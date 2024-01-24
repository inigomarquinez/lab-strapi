# lab-strapi

Project to test [strapi](https://strapi.io/) features.

It is made of the following modules:

- `strapi`:the strapi server DEV and PROD servers
- `payloadcms`:
  - `payloadcms-server-dev`: the payloadcms server DEV instance
  - `payloadcms-server-prod`: the payloadcms server PROD instance
- `next-app`: the frontend application (based on [next.js](https://nextjs.org/))
- `cms-server`: the backend application (based on [nestjs](https://nestjs.com/))
- `localstack`: the localstack instance (based on [localstack](https://www.localstack.cloud/))
- `mongo`: the mongo instance (based on [mongo](https://www.mongodb.com/))
- `postgres`: the postgres instance (based on [postgres](https://www.postgresql.org/))

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
- Go to `postgres` folder copy and rename the `.env.example` file to `.env`
- Go to `strapi` folder copy and rename the `.env.example` file to `.env`
- Go to `payloadcms/payloadcms-dev` folder copy and rename the `.env.example` file to `.env`
- Go to `payloadcms/payloadcms-prod` folder copy and rename the `.env.example` file to `.env`

### Run the services

```bash
cd strapi && npm run develop:dev-instance
cd strapi && npm run develop:prod-instance
cd next-app && npm run dev
cd cms-service && npm run start:dev
cd payloadcms/payloadcms-dev && npm run dev
cd payloadcms/payloadcms-prod && npm run dev
```

- The strapi admin for DEV will be available at http://localhost:1337/admin
  - It will be connected to the strapi_dev database at localhost:5432
- The strapi admin for PROD will be available at http://localhost:1338/admin
  - It will be connected to the strapi_prod database at localhost:5432
- The payloadcms admin for DEV will be available at http://localhost:2337/admin
- The payloadcms admin for PROD will be available at http://localhost:2338/admin
- The web app will be available at http://localhost:3000
- The CMS service will be available at http://localhost:3001

## Useful links

### Strapi

- https://strapi.io/blog/demystifying-strapi-s-populate-and-filtering
- https://strapi.io/blog/how-to-set-up-amazon-s3-upload-provider-plugin-for-our-strapi-app
- https://github.com/localstack/localstack/issues/5539
- https://docs.strapi.io/dev-docs/configurations/environment#environment-variables
- https://strapi.io/blog/how-to-build-a-pseudo-multi-tenant-application-in-strapi

Good points:

- :thumbs_up: https://docs.strapi.io/dev-docs/plugins/upload#responsive-images
- https://docs.strapi.io/dev-docs/configurations/cron


### PayloadCMS

- https://payloadcms.com/docs/production/deployment#file-storage
