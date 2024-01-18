import { CollectionConfig } from "payload/types";

export const Images: CollectionConfig = {
  slug: "images",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name", // required
      type: "text", // required
      required: true,
    },
    {
      name: "file", // required
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
  ],
};

export default Images;
