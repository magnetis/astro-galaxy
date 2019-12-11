import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { AstroThemeProvider } from '@magnetis/astro-galaxy-core';

function Layout({ children, ...props }) {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title: pageTitle } = props.pageContext.frontmatter;

  return (
    <AstroThemeProvider>
      <Helmet title={[siteTitle, pageTitle].join(' | ')} />
      <h1>{pageTitle || siteTitle}</h1>
      <main
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}>
        {children}
      </main>
    </AstroThemeProvider>
  );
}

export default Layout;
