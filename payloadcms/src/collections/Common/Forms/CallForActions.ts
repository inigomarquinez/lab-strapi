import { CollectionConfig } from "payload/types";
import { loggedIn } from "../access/loggedIn";
import { siteAdmins } from "../access/siteAdmins";
import { sites } from "../access/sites";
import { site } from "../../fields/site";

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
    site,
  ],
};
export default CallForActions;
