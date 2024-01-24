import { CollectionConfig } from "payload/types";

const FormConfig: CollectionConfig = {
  slug: "form-configs",
  labels: {
    singular: "Config",
    plural: "Configs",
  },
  admin: {
    useAsTitle: "name",
  },
  versions: {
    drafts: true,
  },
  access: {},
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "options",
      label: "Options",
      type: "relationship",
      hasMany: true,
      relationTo: "form-options",
      required: true,
    },
  ],
};
export default FormConfig;
