import { CollectionConfig } from "payload/types";
import access from "./access";
const Pages: CollectionConfig = {
  slug: "pages1",
  labels: {
    singular: "Page 1",
    plural: "Pages 1",
  },
  admin: {
    useAsTitle: "name",
  },
  versions: {
    drafts: true,
  },
  access,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "backgroundImage",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
    {
      name: "site",
      type: "relationship",
      relationTo: "sites",
      required: true,
      // If user is not admin, set the site by default
      // to the first site that they have access to
      defaultValue: ({ user }) => {
        if (!user.roles?.includes("admin") || user.sites?.[0]) {
          return user.sites[0];
        }
      },
    },
  ],
};

export default Pages;
