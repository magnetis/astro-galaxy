const del = require('del');
const path = require('path');
const fs = require('fs-extra');
const optimizeSvg = require('./optimize-svg');
const createIcons = require('./create-icons');

const BUILD_PATH = path.join(__dirname, '..', 'lib', 'icons');

const buildIcons = svgDataList => {
  del.sync(BUILD_PATH);

  createIcons(svgDataList).forEach(({ filepath, source }) => {
    fs.outputFile(path.join(BUILD_PATH, filepath), source);
  });
};

optimizeSvg('svg-icons/*.svg', buildIcons);
