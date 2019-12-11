const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@magnetis/astro-galaxy-core": path.resolve(__dirname, "../core/src"),
        "@magnetis/astro-galaxy-icons": path.resolve(
          __dirname,
          "../icons/lib/index.es"
        ),
        "@magnetis/astro-galaxy-components": path.resolve(
          __dirname,
          "../components/src"
        )
      }
    }
  });
};
