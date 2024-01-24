import type { CollectionConfig } from "payload/types";

import { site } from "../../fields/site";
import loggedInInSite1 from "./access/loggedInInSite1";
import formatSlug from "./hooks/formatSlug";

const Pages: CollectionConfig = {
  slug: "pages1",
  labels: {
    singular: "Page1",
    plural: "Pages1",
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: loggedInInSite1,
    create: loggedInInSite1,
    update: loggedInInSite1,
    delete: loggedInInSite1,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: "name",
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
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      hasMany: false,
      required: true,
    },
    site,
  ],
};

export default Pages;
