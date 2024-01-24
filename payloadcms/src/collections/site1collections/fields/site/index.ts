import type { Field } from "payload/types";

import { superAdminFieldAccess } from "../../../access/superAdmins";
import { isSuperAdmin } from "../../../utilities/isSuperAdmin";
import { siteAdminFieldAccess } from "./access/siteAdmins";

export const site: Field = {
  name: "site",
  type: "relationship",
  relationTo: "sites",
  // don't require this field because we need to auto-populate it, see below
  // required: true,
  // we also don't want to hide this field because super-admins may need to manage it
  // to achieve this, create a custom component that conditionally renders the field based on the user's role
  // hidden: true,
  index: true,
  admin: {
    position: "sidebar",
  },
  access: {
    create: superAdminFieldAccess,
    read: siteAdminFieldAccess,
    update: superAdminFieldAccess,
  },
  hooks: {
    // automatically set the site1 as this colections are only available
    // on the site1
    beforeChange: [
      async () => {
        return "site1";
      },
    ],
  },
};
