# Use case Strapi vs PayloadCMS

- Página con formulario y varias preguntas
- Imágenes
- Localización
- Extra: environments (dev, staging, prod)
  - 3 instancias distintas?
  - misma instancia con sufijos?
- Extra: multi-tenant ()
- BBDD (dev y prod) desplegada con docker-compose para poder configurar

- Cambios
  - de modelo en un entorno y cómo aplicarlo a otro
  - de contenido en un entorno y cómo aplicarlo a otro


UI:
  Fetch de una página con formulario + imágenes y renderizarla con el react-form-builder


### Pablo:
  - añadir payloadcms-dev y payloadcms-prod

### Íñigo
  - añadir strapi-dev y strapi-prod
  - docker compose con 4 bbdd (strapi y payload para dev y prod) y localstack con S3 para las imágenes

### Rober
  - añadir react-form-builder
  - json de prueba para el react-form-builder (traerlo de Contentful)
