const loggedInInSite1 = async ({ req: { user, payload } }) => {
  const sites = await payload.find({
    collection: "sites",
  });
  const currentSite = sites?.docs?.find(
    (site) =>
      user?.sites?.map((s) => s.site.id).includes(site.id) &&
      site.name === "Site 1"
  );
  return !!currentSite || user?.roles?.includes("super-admin");
};
export default loggedInInSite1;
