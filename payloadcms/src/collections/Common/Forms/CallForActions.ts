import { CollectionConfig } from "payload/types";

const CallForActions: CollectionConfig = {
  slug: "form-call-for-actions",
  labels: {
    singular: "Call For Action",
    plural: "Call For Actions",
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
      name: "caption",
      label: "Caption",
      localized: true,
      type: "text",
      required: true,
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      options: [{ label: "Submit", value: "submit" }],
      required: true,
    },
  ],
};
export default CallForActions;
