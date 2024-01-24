import type { Access } from "payload/types";

export const lastLoggedInSite: Access = ({ req: { user }, data }) =>
  user?.lastLoggedInSite?.id === data?.id;
