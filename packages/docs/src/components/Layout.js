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
`;

const ContentWrapper = styled.div`
  background-image: ${props => props.theme.gradients.nebulosa};
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
`;

const Hero = styled.h1`
  font: ${props => props.theme.fonts.primary};
  font-size: ${props => `${props.theme.fontSizes[7]}px`};
  text-transform: lowercase;
  margin: 103px 0px 186px;
  color: #fff;

  ${breakpoints.max('sm')} {
    font-size: ${props => `${props.theme.fontSizes[6]}px`};
  }
`;

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
      <Page>
        <Sidebar />
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
