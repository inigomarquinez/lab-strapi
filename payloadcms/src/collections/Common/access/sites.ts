import type { Access } from "payload/types";

import { isSuperAdmin } from "../../utilities/isSuperAdmin";

export const sites: Access = ({ req, data }) => {
  const { user } = req;
  const trust = (data?.site?.id &&
    user?.lastLoggedInSite?.id === data.site.id) ||
    (!user?.lastLoggedInSite?.id && isSuperAdmin(user)) || {
      // list of documents
      site: {
        equals: user?.lastLoggedInSite?.id,
      },
    };
  return trust;
};
// individual documents
