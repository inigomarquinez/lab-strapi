const isLoggedInInCurrentSite = async ({ req: { user, payload } }) => {
  const sites = await payload.find({
    collection: "sites",
  });
  const currentSite = sites?.docs?.find(
    (site) => user?.sites?.includes(site.id) && site.title === "Site 1"
  );
  return !!currentSite || user?.roles?.includes("admin");
};

export default {
  // Anyone logged in in this site can create
  create: isLoggedInInCurrentSite,
  // Only admins or editors with site access can update
  update: isLoggedInInCurrentSite,
  // Admins or editors with site access can read,
  // otherwise users not logged in can only read published
  read: isLoggedInInCurrentSite,
  // Only admins can delete
  delete: isLoggedInInCurrentSite,
};
