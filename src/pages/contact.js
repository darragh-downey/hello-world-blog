import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact me" />
        <Bio />
        <h1>Leave me a message!</h1>
        <form method="post" action="#">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
              Message
              <textarea name="message" id="message" rows="5"/>
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
        <Link to="/">
          <Button marginTop="35px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Contact
