import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

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
  access: {
    read: sites,
    create: loggedIn,
    update: siteAdmins,
    delete: siteAdmins,
  },
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
    site,
  ],
};
export default DependentQuestions;
