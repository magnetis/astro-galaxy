import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { AstroThemeProvider } from '@magnetis/astro-galaxy-core';
import styled from 'styled-components';
import breakpoints from '../utils/breakpoints';
import Sidebar from './Sidebar';

const Page = styled.div`
  display: flex;
  font: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.moon900};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const ContentWrapper = styled.div`
  background-image: ${props => props.theme.gradients.blackhole};
  background-size: 100% 312px;
  background-position: center top;
  background-repeat: no-repeat;
  flex: 1 1 0%;
`;

const Content = styled.div`
  margin: 0px auto;
  width: 100%;
  padding: 20px;

  ${breakpoints.min('md')} {
    padding: 0px 40px 40px 90px;
  }

  ${breakpoints.min('lg')} {
    width: 90%;
  }

  & h2,
  h3 {
    color: ${props => props.theme.colors.moon500};
  }

  h2 {
    font: ${props => props.theme.fonts.primary};
    font-size: ${props => props.theme.fontSizes.texts.large};
  }

  h3 {
    font-size: ${props => props.theme.fontSizes.texts.medium};
    margin-top: ${props => props.theme.space[4]}px;
  }

  & code {
    background-color: ${props => props.theme.colors.space200};
    color: ${props => props.theme.colors.moon400};
    font-family: monospace;
    font-size: 0.8em;
    padding: 2px 5px;
    margin: 0 3px;
  }
`;

const Hero = styled.h1`
  font: ${props => props.theme.fonts.primary};
  font-size: ${props => `${props.theme.fontSizes.headings.huge}`};
  text-transform: lowercase;
  margin: 103px 0px 186px;
  color: #fff;

  ${breakpoints.max('sm')} {
    font-size: ${props => `${props.theme.fontSizes.headings.large}`};
  }
`;

function Layout({ children, ...props }) {
  const {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allSitePage,
    allMdx,
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }

      allSitePage(filter: { path: { regex: "/^((?!404).)*$/" } }) {
        nodes {
          path
          context {
            frontmatter {
              title
            }
          }
        }
      }

      allMdx(filter: { headings: { elemMatch: { depth: { eq: 2 } } } }) {
        nodes {
          frontmatter {
            title
          }
          headings(depth: h2) {
            value
          }
        }
      }
    }
  `);

  const { title: pageTitle } = props.pageContext.frontmatter;

  return (
    <AstroThemeProvider>
      <Helmet title={[siteTitle, pageTitle].join(' | ')} />
      <Page>
        <Sidebar currentPath={props.path} pages={allSitePage} mdx={allMdx} />
        <ContentWrapper>
          <Content>
            <Hero>{pageTitle || siteTitle}</Hero>
            {children}
          </Content>
        </ContentWrapper>
      </Page>
    </AstroThemeProvider>
  );
}

export default Layout;
