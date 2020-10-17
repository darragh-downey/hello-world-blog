import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About me" />
        <h1>:/ Working on it!</h1>
        <div>
          
        </div>
        <Link to="/">
          <Button marginTop="35px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default About
