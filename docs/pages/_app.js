import React from 'react';
import App, { Container } from 'next/app';
import { AstroThemeProvider, theme } from '@magnetis/astro-galaxy-core';
import Link from 'next/link';
import { Layout, NavLinks, Pagination } from 'mdx-docs';
import components from '../src/componets';

const routes = [
  { name: 'Home', path: '/' },
  { name: 'Getting Started', path: '/getting-started' },
  { name: 'Components', path: '/components' },
  { name: 'Button', path: '/components/Button' },
];

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let page = {};

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx);
    }

    return { page };
  }

  render() {
    const { Component, page, headManager, ...props } = this.props;

    return (
      <Container>
        <AstroThemeProvider theme={theme}>
          <Layout {...props} components={components} routes={routes}>
            <Layout.MenuToggle />
            <Layout.Sidebar>
              <NavLinks />
            </Layout.Sidebar>
            <Layout.Main>
              <Component {...page} />
              <Pagination />
            </Layout.Main>
          </Layout>
        </AstroThemeProvider>
      </Container>
    );
  }
}
