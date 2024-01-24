import type { FieldAccess } from "payload/types";

import { checkUserRoles } from "../../../../utilities/checkUserRoles";

export const siteAdminFieldAccess: FieldAccess = ({ req: { user }, doc }) => {
  return (
    checkUserRoles(["super-admin"], user) ||
    !doc?.site ||
    (doc?.site &&
      user?.sites?.some(
        ({ site: userSite, roles }) =>
          (typeof doc?.site === "string" ? doc?.site : doc?.site.id) ===
            userSite?.id && roles?.includes("admin")
      ))
  );
};
