import type { PayloadRequest } from "payload/dist/types";

import { isSuperAdmin } from "../../utilities/isSuperAdmin";

const logs = false;

export const isSuperOrSiteAdmin = async (args: {
  req: PayloadRequest;
}): Promise<boolean> => {
  const {
    req,
    req: { user, payload },
  } = args;

  // always allow super admins through
  if (isSuperAdmin(user)) {
    return true;
  }

  if (logs) {
    const msg = `Finding site with host: '${req.headers.host}'`;
    payload.logger.info({ msg });
  }

  // read `req.headers.host`, lookup the site by `domain` to ensure it exists, and check if the user is an admin of that site
  const foundSites = await payload.find({
    collection: "sites",
    where: {
      "domains.domain": {
        in: [req.headers.host],
      },
    },
    depth: 0,
    limit: 1,
  });

  // if this site does not exist, deny access
  if (foundSites.totalDocs === 0) {
    if (logs) {
      const msg = `No site found for ${req.headers.host}`;
      payload.logger.info({ msg });
    }

    return false;
  }

  if (logs) {
    const msg = `Found site: '${foundSites.docs?.[0]?.name}', checking if user is an site admin`;
    payload.logger.info({ msg });
  }

  // finally check if the user is an admin of this site
  const siteWithUser = user?.sites?.find(
    ({ site: userSite }) => userSite?.id === foundSites.docs[0].id
  );

  if (siteWithUser?.roles?.some((role) => role === "admin")) {
    if (logs) {
      const msg = `User is an admin of ${foundSites.docs[0].name}, allowing access`;
      payload.logger.info({ msg });
    }

    return true;
  }

  if (logs) {
    const msg = `User is not an admin of ${foundSites.docs[0].name}, denying access`;
    payload.logger.info({ msg });
  }

  return false;
};
