const warningTemplate = require('./warning-template');

const iconComponentTemplate = ({ componentName, svgPaths, viewBox }) => `
  ${warningTemplate}
import React, { Fragment } from 'react';
import IconComponent from './IconComponent';

const ${componentName} = props => (
  <IconComponent
    viewBox="${viewBox}"
    content={
      <Fragment>${svgPaths}</Fragment>
    }
    {...props}
  />
);

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

module.exports = iconComponentTemplate;
