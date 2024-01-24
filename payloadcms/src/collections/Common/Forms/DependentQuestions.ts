import { CollectionConfig } from "payload/types";

const DependentQuestions: CollectionConfig = {
  slug: "form-dependent-questions",
  labels: {
    singular: "Dependent Question",
    plural: "Dependent Questions",
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
      name: "conditions",
      label: "Condition",
      type: "text",
      hasMany: true,
      required: true,
    },
    {
      name: "questions",
      label: "Questions",
      type: "relationship",
      relationTo: "form-questions",
      required: true,
    },
  ],
};
export default DependentQuestions;
