/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  // Laisse le routage basé sur la structure de fichiers (pas de routes manuelles pour l'instant)
  ignoredRouteFiles: [],
};
