const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const SVGO = require('svgo');
const SVGI = require('svgi');
const svg2jsx = require('@balajmarius/svg2jsx');
const kebabCase = require('lodash/kebabCase');

const svgo = ({ name }) =>
  new SVGO({
    plugins: [
      {
        cleanupIDs: {
          remove: false,
          prefix: `${name}-`,
          minify: true,
        },
      },
      { removeAttrs: { attrs: '(stroke|fill-rule|fill)' } },
    ],
  });

const getName = assetPath => path.basename(assetPath, path.extname(assetPath));

const getViewBox = svg => {
  const { nodes } = new SVGI(svg).report();

  return nodes.properties.viewBox || `0 0 ${nodes.properties.width} ${nodes.properties.height}`;
};

const optimizeSvg = (assetPattern, callback) => {
  const assetpaths = glob.sync(assetPattern);
  const optimizedItems = [];

  assetpaths.forEach(assetpath => {
    const name = getName(assetpath);

    fs.readFile(assetpath, 'utf8', (err, content) => {
      if (err) {
        throw err;
      }

      const viewBox = getViewBox(content);

      svgo({ name })
        .optimize(content, { path: assetpath })
        .then(({ data, info }) => {
          svg2jsx(data)
            .then(jsxSVG => {
              optimizedItems.push({
                source: jsxSVG,
                metadata: Object.assign(info, {
                  viewBox,
                  name: kebabCase(name),
                }),
              });

              if (optimizedItems.length === assetpaths.length) {
                callback(optimizedItems);
              }
            })
            .catch(err => console.log(err));
        });
    });
  });
};

module.exports = optimizeSvg;
