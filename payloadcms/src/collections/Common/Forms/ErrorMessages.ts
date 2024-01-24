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
      localized: true,
      type: "text",
      required: true,
    },
    {
      name: "required",
      label: "Required",
      localized: true,
      type: "text",
    },
    {
      name: "maximumLen",
      label: "Maximum Length",
      localized: true,
      type: "text",
    },
    {
      name: "minimumLen",
      label: "Minimum Length",
      localized: true,
      type: "text",
    },
    {
      name: "pattern",
      label: "Pattern",
      localized: true,
      type: "text",
    },
  ],
};
export default ErrorMessages;
