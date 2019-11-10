## Contributing to Astro Galaxy

It's awesome that you want to contribute to Astro Galaxy! Before proceeding, please read our [Code of Conduct](CODE_OF_CONDUCT.md).

We recommend [Prettier](https://github.com/prettier/prettier) as your code formatter to keep a consistent style.

- [TLDR](#tldr)
- [Local Development](#local-development)
- [Clone the repo](#clone-the-repo)
- [Lerna and Rollup](#lerna-and-rollup)
- [Install dependencies](#install-dependencies)
- [Running tests](#running-tests)
- [Creating new components](#creating-new-components)
- [Storybook](#storybook)

### TLDR

1. Clone Astro Galaxy: `git clone git@github.com:magnetis/astro-galaxy.git`.

2. If you previously cloned Astro Galaxy, run `git pull` to get the latest update from the remote repository.

3. Install the dependencies on your machine. Still on your terminal, run `yarn bootstrap`.

4. Create a new branch to work on, with the command `git checkout -b yourbranch`.

5. If you wish to create a new component, run `yarn create-component` and follow the steps.

6. You're now ready to run Storybook. Run `yarn dev` and visit [localhost:5555](http://localhost:5555/).

7. Find the file(s) you wish to edit in the folders below:

   - Components files: `packages/components/src`.

   - Core files (theme and others): `packages/core/core`.

   - Icons: `packages/icons/src`.

8. You can view your changes by refreshing the page at [localhost:5555](http://localhost:5555/) (it refreshes automatically as you save files on your editor, though).

9. For more detailed information, please read the infos below.

### Local Development

To contribute code to Astro Galaxy, first you'll need to set it up for
local development. Please follow the steps below to run the project and start coding:

### Clone the repo

```sh
git clone git@github.com:magnetis/astro-galaxy.git
cd astro-galaxy
```

### Lerna and Rollup

This repository is set up as a monorepo. To make this happen we use [Lerna](https://lernajs.io) & [Rollup](https://rollupjs.org) & [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). This monorepo contains three main npm packages in the `packages/` folder; `components`, `core` and `icons`.

- `components`: All our components lives inside this folder.
- `core`: Contains our theme and custom ThemeProvider (AstroThemeProvider).
- `icons`: Astro's icons.

### Install dependencies

In the root directory, use `yarn bootstrap` command to install dependencies.

```sh
yarn bootstrap
```

This command will run `lerna bootstrap` that install all dependencies and do all the linkings necessary.

### Running tests

We use [Jest](https://jestjs.io) for testing, including unit tests for functionality and
[snapshot testing](https://jestjs.io/docs/en/snapshot-testing.html#content) for components.

```sh
yarn test:unit
```

To run tests in watch mode (useful for TDD):

```sh
test:unit:watch
```

If you make intentional changes to an existing component, you might need to
update its snapshot, press `u` while running tests in watch mode.

### Creating new components

We use [Plop](https://plopjs.com/) to scaffold new components rather than copying & pasting from a boilerplate.
Follow the steps below to create a new component:

1. Run `yarn create-component` and follow the prompts
2. Make sure to export your new component by adding an export in `packages/components/src/index.js` file

### Storybook

[Storybook](https://storybook.js.org) is used for isolated UI component development at the moment.
To run storybook locally from the root directory:

```sh
yarn dev
open http://localhost:5555/
```

Storybook stories are inside each component's folder with the `index.story.js` filename. If you scaffold your new component using the steps described on [creating new components](#creating-new-components) you should be cover.
