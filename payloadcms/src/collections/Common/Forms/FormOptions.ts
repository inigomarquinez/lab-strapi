import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

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
  access: {
    read: sites,
    create: loggedIn,
    update: siteAdmins,
    delete: siteAdmins,
  },
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
    site,
  ],
};
export default FormOptions;
