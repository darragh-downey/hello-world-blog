import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"


class Work extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "Work History"
    const work = data.workJson

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Work history" />
        <h1>History</h1>
        <h4>Working on it :)</h4>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    workJson {
        title
        company
        startDate
        endDate
        description
    }
  }
`


export default Work
