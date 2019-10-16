const sortBy = require('lodash/sortBy');
const warningTemplate = require('./warning-template');

const indexTemplate = files => `
  ${warningTemplate}
${sortBy(files, 'componentName')
  .map(file => `export { default as ${file.componentName} } from './${file.componentName}';\n`)
  .join('')}`;

module.exports = indexTemplate;
