import { CollectionConfig } from "payload/types";

const RegisterConfig: CollectionConfig = {
  slug: "form-register-configs",
  labels: {
    singular: "Register Config",
    plural: "Register Configs",
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
      name: "required",
      label: "Required",
      type: "checkbox",
    },
    {
      name: "maximumLen",
      label: "Maximum Length",
      type: "number",
    },
    {
      name: "minimumLen",
      label: "Minimum Length",
      type: "number",
    },
    {
      name: "pattern",
      label: "Pattern",
      type: "text",
    },
  ],
};
export default RegisterConfig;
