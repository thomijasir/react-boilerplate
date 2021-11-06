const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.dev.config");

// Change port to suit your preference
const Port = 8888;
const Host = "localhost";
// Options Dev Servers
const options = {
  // Open To Browser
  open: true,
  // History Link API For URL
  historyApiFallback: true,
  // Enable webpack's Hot Module Replacement feature
  hot: true,
  // Client Custom Config Info
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
    logging: "info",
    progress: true,
    reconnect: true,
  },
  // Reload On Live Disable For Fast Development
  liveReload: false,
  // Port Listening
  port: "auto",
  // Message on listening port
  onListening: function (devServer) {
    if (!devServer) {
      throw new Error("webpack-dev-server is not defined");
    }
    console.log(`Running on: http://${Host}:${Port}\n`);
  },
};
// Compiler & Serve Service
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);
server.listen(Port, Host, () => {});
