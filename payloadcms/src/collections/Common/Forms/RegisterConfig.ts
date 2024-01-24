import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

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
    site,
  ],
};
export default RegisterConfig;
