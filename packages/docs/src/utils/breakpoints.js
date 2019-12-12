const breakpoints = {
  xs: 0,
  sm: 560,
  md: 768,
  lg: 920,
  xl: 1120,
};

function min(key) {
  return `@media (min-width: ${breakpoints[key]}px)`;
}

function max(key) {
  return `@media (max-width: ${breakpoints[key] - 1}px)`;
}

export default { min, max };
