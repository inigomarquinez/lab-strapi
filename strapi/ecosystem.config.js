module.exports = {
  apps: [
    {
      name: 'strapi_dev_server',
      cwd: '.',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'dev_server',
        PORT: 1337,
        DATABASE_NAME: 'strapi_dev_server',
        // DOMAIN_URL: 'localhost',
        AWS_BUCKET: 'strapi-dev-bucket',
      }
    },
    {
      name: 'strapi_prod_server',
      cwd: '.',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'prod_server',
        PORT: 1338,
        DATABASE_NAME: 'strapi_prod_server',
        // DOMAIN_URL: 'localhost',
        AWS_BUCKET: 'strapi-prod-bucket',
      }
    }
  ]
};