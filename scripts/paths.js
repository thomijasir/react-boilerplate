// paths.js

// Paths will export some path variables that we'll
// use in other Webpack config and server files

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appAssets: resolveApp("src/assets"), // For images and other assets
  appBuild: resolveApp("build"), // Prod built files end up here
  appConfig: resolveApp("config"), // App config files
  appHtml: resolveApp("index.html"),
  appIndexJs: resolveApp("src/index.tsx"), // Main entry point
  appSrc: resolveApp("src"), // App source
};

// Reference Configuration WebPack
// https://gist.github.com/developit/3c83db422f03ef66ea36
// https://github.com/joshuacrass/react-scss-webpack
