import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Darragh Downey"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `dev`,
            `software`,
          ]}
        />
        <h1>
          <div>
            Hey people{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
          </div>
          <div><br/></div>
          <div>
            Currently under construction - but I have started writing on my blog! {" "}
            <span role="img" aria-label="smiley emoji">:)</span>
          </div>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: 2,
            }}
          >
            <Link to="/blog/">
              <Button marginTop="35px">Go to Blog</Button>
            </Link>
          </div>
          <div
            style={{
              padding: 2,
            }}
          >
            <Link to="/contact/">
              <Button marginTop="35px">Contact me</Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
