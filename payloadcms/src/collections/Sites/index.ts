import type { CollectionConfig } from "payload/types";

import { superAdmins } from "../access/superAdmins";
import { siteAdmins } from "./access/siteAdmins";

const Sites: CollectionConfig = {
  slug: "sites",
  access: {
    create: superAdmins,
    read: siteAdmins,
    update: siteAdmins,
    delete: superAdmins,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "domains",
      type: "array",
      index: true,
      fields: [
        {
          name: "domain",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Sites;
