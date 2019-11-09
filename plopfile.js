module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Create a new Astro component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Please enter component name (ProperCase)',
      },
      {
        type: 'input',
        name: 'htmlTag',
        message: 'Please enter HTML tag name (e.g. div)',
      },
    ],
    actions: [
      {
        type: 'addMany',
        base: 'plop-templates/component',
        destination: 'packages/components/src/{{componentName}}/',
        templateFiles: 'plop-templates/component/**',
      },
    ],
  });
};
