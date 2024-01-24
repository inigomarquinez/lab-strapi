import type { FieldAccess } from "payload/types";

import { checkUserRoles } from "../../utilities/checkUserRoles";
import { checkSiteRoles } from "../utilities/checkSiteRoles";

export const siteAdmins: FieldAccess = (args) => {
  const {
    req: { user },
    doc,
  } = args;

  return (
    checkUserRoles(["super-admin"], user) ||
    doc?.sites?.some(({ site }) => {
      const id = typeof site === "string" ? site : site?.id;
      return checkSiteRoles(["admin"], user, id);
    })
  );
};
