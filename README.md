# Astro Galaxy

### A design system by Magnetis 👩‍🚀🌌

[![Build Status](https://travis-ci.org/magnetis/astro-galaxy.svg?branch=main)](https://travis-ci.org/magnetis/astro-galaxy)

## Table of contents

- [Introduction](#introduction)
- [Supported libraries](#supported-libraries)
- [Adding Astro Galaxy to your project](#adding-astro-galaxy-to-your-project)
- [Using Astro Galaxy](#using-astro-galaxy)
- [Contributing](#contributing)
- [Contact us](#contact-us)

## Introduction

Made for **Magnetis**' designers, developers, product managers, data analysts, data scientists, stakeholders and enthusiasts, **Astro Galaxy** helps us protect the brand concepts, elevate consistency of user experience and increase the speed and efficiency of how we design and build products for our customers.

**Astro Galaxy** was born from the necessity of supporting Astro in other platforms, such as React Native. **Astro Galaxy** is a set of packages that will allow us to do that. Splitted in different packages (components, core, icons), **Astro Galaxy** let us use only what we need, so we don't need to import things in our projects that we not gonna use.

We believe that a good user experience is built with **consistent design**, well defined **visual and interaction patterns**, carefully built **emotions** and **made for all**.
Therefore, Astro Galaxy is essentially:

<!-- ### Atomic

Astro is built based on **Atomic Design**, so our designers and developers can use its style set and components to enhance our product interface, as a **modular system** that can be easily **managed and updated**. -->

### Open

Magnetis believes that good design and experiences can **impact the product market and society itself**. Our **design and code assets are open** so we can contribute to the community and help new product teams.

### Accessible

Design is meant to be **for all**. Astro style and components follow basic recommendations from the **WCAG guidelines** for accessibility, with tested contrast ratios and good practices in legibility and screen reading solutions.
[See WCAG.](https://www.w3.org/TR/WCAG21/)

## Supported libraries

For now, Astro Galaxy only supports React (but we do plan to support React Native soon) as its official library.

## Adding Astro Galaxy to your project

### Installing the dependencies.

Assuming you already have React and styled-components installed:

Install with `yarn` or `npm` Astro Galaxy required packages via terminal:

`@magnetis/astro-galaxy-themes @magnetis/astro-galaxy-components @magnetis/astro-galaxy-icons`

## Using Astro Galaxy

Ready to start coding with Astro? Follow the instructions in the docs ([https://astro-galaxy.magnetis.com.br](https://astro.magnetis.com.br/)) to learn how to use our components.

Here's a quick example. If you'd like to use the default **Astro Galaxy** button component.

1. Complete all install steps listed above;

2. The second thing you'll need, is to import `AstroThemeProvider` and our default `theme` file from `@magnetis/astro-galaxy-themes`;

Look for entry point of your application and made the following changes.

```diff
import React from 'react';
// other imports you my have
+ import { AstroThemeProvider, webTheme } from "@magnetis/astro-galaxy-themes";

const Root = () => (
+ <AstroThemeProvider theme={webTheme}>
  <App />
+ </AstroThemeProvider>
);
```

Make sure nothing has broken after the changes above.

3. Now, let's import out `Button` component. Go whatever you want to use **Astro Galaxy**'s button and import it like so:

```js
import { Button } from '@magnetis/astro-galaxy-components';
```

4. Then, declare it like so:

```js
<Button>My Astro Galaxy button</Button
```

Check the docs for all the props available and happy coding!

## Contributing

It's awesome that you want to contribute to Astro! Please see [CONTRIBUTING.md](CONTRIBUTING.md) to learn how it works.

## Contact us

Found a bug? Please see if it was already reported on our [issues page](https://github.com/magnetis/astro-galaxy/issues). If you can't find a matching report, you can [open a new issue](https://github.com/magnetis/astro-galaxy/issues/new) including as much information as you can gather. We appreciate it!

Any lingering questions? You can contact us at [dev@magnetis.com.br](mailto:dev@magnetis.com.br).

Thank you for using Astro! 🎉
