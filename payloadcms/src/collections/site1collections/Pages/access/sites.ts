import type { Access } from "payload/types";

import { isSuperAdmin } from "../../../utilities/isSuperAdmin";

export const sites: Access = ({ req: { user }, data }) =>
  // individual documents
  (data?.site?.id && user?.lastLoggedInSite?.id === data.site.id) ||
  (!user?.lastLoggedInSite?.id && isSuperAdmin(user)) || {
    // list of documents
    site: {
      equals: "65b15435d783613fc93e6b62",
    },
  };
