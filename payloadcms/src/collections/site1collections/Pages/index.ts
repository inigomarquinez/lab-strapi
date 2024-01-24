import type { CollectionConfig } from "payload/types";

import { site } from "../../fields/site";
import { loggedIn } from "./access/loggedIn";
import { siteAdmins } from "./access/siteAdmins";
import { sites } from "./access/sites";
import formatSlug from "./hooks/formatSlug";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: sites,
    create: loggedIn,
    update: siteAdmins,
    delete: siteAdmins,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      index: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    site,
  ],
};

export default Pages;
