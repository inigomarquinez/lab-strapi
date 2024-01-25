import type { AfterLoginHook } from "payload/dist/collections/config/types";

export const recordLastLoggedInSite: AfterLoginHook = async ({ req, user }) => {
  try {
    const relatedOrg = await req.payload.find({
      collection: "sites",
      where: {
        "domains.domain": {
          in: [req.headers.host],
        },
      },
      depth: 0,
      limit: 1,
    });

    if (relatedOrg.docs.length > 0) {
      await req.payload.update({
        id: user.id,
        collection: "users",
        data: {
          lastLoggedInSite: relatedOrg.docs[0].id,
        },
      });
    }
  } catch (err: unknown) {
    req.payload.logger.error(
      `Error recording last logged in site for user ${user.id}: ${err}`
    );
  }

  return user;
};
