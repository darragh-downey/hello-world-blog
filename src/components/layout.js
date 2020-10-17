import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./header"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const galleryPath = `${__PATH_PREFIX__}/gallery/`
    let hdr

    hdr = <Header></Header>
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {hdr}
          <main>{children}</main>
        </div>
        <Footer>
          © Darragh Downey {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          All thoughts are my own
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout

// <h1
//style={{
//  ...scale(1.5),
//  marginBottom: rhythm(1.5),
//  marginTop: 0,
//}}
//>
//<Link
//  style={{
//    boxShadow: `none`,
//    textDecoration: `none`,
//    color: `inherit`,
//  }}
//  to={location.pathname === blogPath ? `/blog/` : `/`}
//>
//  {title}
//</Link>
//</h1>
