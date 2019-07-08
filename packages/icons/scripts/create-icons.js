const upperFirst = require('lodash/upperFirst');
const camelCase = require('lodash/camelCase');
const iconTemplate = require('../templates/icon-template');
const iconComponentTemplate = require('../templates/icon-component-template');
const indexTemplate = require('../templates/index');

const getSVGContent = source =>
  source.slice(source.indexOf('>') + 1).slice(0, -6);

const createIcon = svgs => {
  const files = svgs.map((svg) => {
    const { name, viewBox, width, height } = svg.metadata;
    const componentName = upperFirst(camelCase(name));
    const svgPaths = getSVGContent(svg.source);
    const source = iconComponentTemplate({
      componentName,
      svgPaths,
      viewBox,
      height,
      width,
    });
    const filepath = `${componentName}.js`;

    return { filepath, source, componentName };
  });

  files.push({
    filepath: 'index.js',
    source: indexTemplate(files),
  });

  files.push({
    filepath: 'IconComponent.js',
    source: iconTemplate(),
  });

  return files;
};

module.exports = createIcon;
