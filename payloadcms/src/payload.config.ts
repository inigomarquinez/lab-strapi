import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { Config, buildConfig } from "payload/config";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

import Users from "./collections/Users";
import Sites from "./collections/Sites";
import CommonCollections from "./collections/Common";
import Site1Collections from "./collections/site1collections";
import { seed } from "./seed";

const config: Config = {
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          fs: false,
        },
      },
    }),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Sites, // Tenants
    ...CommonCollections,
    ...Site1Collections,
  ],
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "Spanish",
        code: "es",
      },
    ],
    defaultLocale: "en",
    fallback: false,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  plugins: [
    cloudStorage({
      collections: {
        // Enable cloud storage for Media collection
        media: {
          // Create the S3 adapter
          adapter: s3Adapter({
            config: {
              endpoint: process.env.S3_ENDPOINT,
              forcePathStyle: true,
              credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY_ID,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
              },
            },
            bucket: process.env.S3_BUCKET,
          }),
        },
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  onInit: async (payload) => {
    if (process.env.PAYLOAD_SEED) {
      await seed(payload);
    }
  },
};

export default buildConfig(config);
