import type { Access } from "payload/config";

import { isSuperAdmin } from "../../utilities/isSuperAdmin";

// the user must be an admin of the site being accessed
export const siteAdmins: Access = ({ req: { user } }) => {
  if (isSuperAdmin(user)) {
    return true;
  }

  return {
    id: {
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
