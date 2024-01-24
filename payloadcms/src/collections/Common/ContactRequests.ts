import { CollectionConfig } from "payload/types";
import { siteAdmins } from "./access/siteAdmins";
import { site } from "../fields/site";

const ContactRequests: CollectionConfig = {
  slug: "contact-requests",
  access: {
    // Anyone can create, even unauthenticated
    create: () => true,
    // No one can update, ever
    update: () => false,
    // Only admins can read
    read: siteAdmins,
    // No one can delete, ever
    delete: () => false,
  },
  fields: [
    {
      name: "message",
      type: "textarea",
      required: true,
    },
    site,
  ],
};

export default ContactRequests;
