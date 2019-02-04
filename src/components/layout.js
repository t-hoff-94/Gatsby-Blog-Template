import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const GET_SITE_METADATA = graphql`
  query GET_SITE_METADATA {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={GET_SITE_METADATA}
    render={({ site: { siteMetadata } }) => (
      <>
        <Header siteTitle={siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.tannerhoffman.space">{siteMetadata.author}</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
