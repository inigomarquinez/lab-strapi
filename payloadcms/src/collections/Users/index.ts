import type { CollectionConfig } from "payload/types";

import { anyone } from "../access/anyone";
import { superAdminFieldAccess } from "../access/superAdmins";
import { adminsAndSelf } from "./access/adminsAndSelf";
import { siteAdmins } from "./access/siteAdmins";
import { loginAfterCreate } from "./hooks/loginAfterCreate";
import { recordLastLoggedInSite } from "./hooks/recordLastLoggedInSite";
import { isSuperOrSiteAdmin } from "./utilities/isSuperOrSiteAdmin";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: adminsAndSelf,
    create: anyone,
    update: adminsAndSelf,
    delete: adminsAndSelf,
    admin: isSuperOrSiteAdmin,
  },
  hooks: {
    afterChange: [loginAfterCreate],
    afterLogin: [recordLastLoggedInSite],
  },
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      access: {
        create: superAdminFieldAccess,
        update: superAdminFieldAccess,
        read: superAdminFieldAccess,
      },
      options: [
        {
          label: "Super Admin",
          value: "super-admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
    {
      name: "sites",
      type: "array",
      label: "Sites",
      access: {
        create: siteAdmins,
        update: siteAdmins,
        read: siteAdmins,
      },
      fields: [
        {
          name: "site",
          type: "relationship",
          relationTo: "sites",
          required: true,
        },
        {
          name: "roles",
          type: "select",
          hasMany: true,
          required: true,
          options: [
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "User",
              value: "user",
            },
          ],
        },
      ],
    },
    {
      name: "lastLoggedInSite",
      type: "relationship",
      relationTo: "sites",
      index: true,
      access: {
        create: () => false,
        read: siteAdmins,
        update: superAdminFieldAccess,
      },
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Users;
