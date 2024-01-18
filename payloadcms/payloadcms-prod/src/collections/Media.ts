import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {},
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
