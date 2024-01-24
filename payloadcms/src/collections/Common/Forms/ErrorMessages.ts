import { CollectionConfig } from "payload/types";

const ErrorMessages: CollectionConfig = {
  slug: "form-error-messages",
  labels: {
    singular: "Error Message",
    plural: "Error Messages",
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
      type: "text",
    },
    {
      name: "maximumLen",
      label: "Maximum Length",
      type: "text",
    },
    {
      name: "minimumLen",
      label: "Minimum Length",
      type: "text",
    },
    {
      name: "pattern",
      label: "Pattern",
      type: "text",
    },
  ],
};
export default ErrorMessages;
