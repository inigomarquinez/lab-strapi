import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

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
      name: "options",
      label: "Options",
      type: "relationship",
      hasMany: true,
      relationTo: "form-options",
      required: true,
    },
    site,
  ],
};
export default FormConfig;
