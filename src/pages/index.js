import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, `dev`, `software`]}
        />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          <span role="img" aria-label="smiley emoji">

          </span>
        </h1>
        <p>You are on my home page.</p>
        <p>
          I tinker with software.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
        <Link to="/contact/">
          <Button marginTop="35px">Contact me</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
