import type { Access } from "payload/config";

import { checkUserRoles } from "../../../utilities/checkUserRoles";

// the user must be an admin of the document's site
export const siteAdmins: Access = ({ req: { user } }) => {
  if (checkUserRoles(["super-admin"], user)) {
    return true;
  }

  return {
    site: {
      in: ["65b15435d783613fc93e6b62"],
    },
  };
};
