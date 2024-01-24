import { CollectionConfig } from "payload/types";

const FormOptions: CollectionConfig = {
  slug: "form-options",
  labels: {
    singular: "Option",
    plural: "Options",
  },
  admin: {
    useAsTitle: "label",
  },
  versions: {
    drafts: true,
  },
  access: {},
  fields: [
    {
      name: "label",
      label: "Label",
      localized: true,
      type: "text",
      required: true,
    },
    {
      name: "value",
      label: "Value",
      type: "text",
      required: true,
    },
  ],
};
export default FormOptions;
