import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

const Forms: CollectionConfig = {
  slug: "forms",
  labels: {
    singular: "Form",
    plural: "Forms",
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
      name: "id",
      label: "Id",
      type: "text",
    },
    {
      name: "titleForm",
      label: "Title",
      localized: true,
      type: "text",
    },
    {
      name: "enabled",
      label: "Enabled",
      localized: true,
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "questions",
      label: "Questions",
      type: "relationship",
      relationTo: "form-questions",
      hasMany: true,
    },
    {
      name: "callForActions",
      label: "Call For Actions",
      type: "relationship",
      relationTo: "form-call-for-actions",
    },
    site,
  ],
};
export default Forms;
