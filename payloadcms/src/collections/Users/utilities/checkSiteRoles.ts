import type { User } from "../../../payload-types";

export const checkSiteRoles = (
  allRoles: User["sites"][0]["roles"] = [],
  user: User = undefined,
  site: User["sites"][0]["site"] = undefined
): boolean => {
  if (site) {
    const id = typeof site === "string" ? site : site?.id;

    if (
      allRoles.some((role) => {
        return user?.sites?.some(({ site: userSite, roles }) => {
          const siteID = typeof userSite === "string" ? userSite : userSite?.id;
          return siteID === id && roles?.includes(role);
        });
      })
    )
      return true;
  }

  return false;
};
