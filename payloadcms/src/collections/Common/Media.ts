import { CollectionConfig } from "payload/types";
import { loggedIn } from "./access/loggedIn";
import { siteAdmins } from "./access/siteAdmins";
import { sites } from "./access/sites";
import { site } from "../fields/site";

const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  access: {
    read: sites,
    create: loggedIn,
    update: siteAdmins,
    delete: siteAdmins,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    site,
  ],
};
export default Media;
