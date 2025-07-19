module.exports = {
  locales: ["uk", "en"],
  sourceLocale: "uk",
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["components", "app"],
    },
  ],
  format: "po",
};