import type { Access } from "payload/config";

import { checkUserRoles } from "../../../utilities/checkUserRoles";

// the user must be an admin of the document's site
export const siteAdmins: Access = ({ req: { user } }) => {
  if (checkUserRoles(["super-admin"], user)) {
    return true;
  }

  return {
    site: {
      in:
        user?.sites
          ?.map(({ site, roles }) =>
            roles.includes("admin")
              ? typeof site === "string"
                ? site
                : site.id
              : null
          ) // eslint-disable-line function-paren-newline
          .filter(Boolean) || [],
    },
  };
};
