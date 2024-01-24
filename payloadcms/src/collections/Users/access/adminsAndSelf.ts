import type { Access } from "payload/config";
import type { User } from "payload/generated-types";

import { isSuperAdmin } from "../../utilities/isSuperAdmin";

export const adminsAndSelf: Access<any, User> = async ({ req: { user } }) => {
  if (user) {
    const isSuper = isSuperAdmin(user);

    // allow super-admins through only if they have not scoped their user via `lastLoggedInSite`
    if (isSuper && !user?.lastLoggedInSite) {
      return true;
    }

    // allow users to read themselves and any users within the sites they are admins of
    return {
      or: [
        {
          id: {
            equals: user.id,
          },
        },
        ...(isSuper
          ? [
              {
                "sites.site": {
                  in: [
                    typeof user?.lastLoggedInSite === "string"
                      ? user?.lastLoggedInSite
                      : user?.lastLoggedInSite?.id,
                  ].filter(Boolean),
                },
              },
            ]
          : [
              {
                "sites.site": {
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
              },
            ]),
      ],
    };
  }
};
