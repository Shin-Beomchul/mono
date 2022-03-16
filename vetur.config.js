module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true,
  },
  projects: [
    "./applications/dml",
    "./packages/type-utils",
    "./packages/mock-service",
    "./components/comm-components",
    "./components/comm-search",
  ],
};
