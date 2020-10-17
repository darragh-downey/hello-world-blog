import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          paddingTop: 8,
        }}
      >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h2>
              <Link
                to="/about"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  padding: 2,
                }}
              >
                About
              </Link>
            </h2>

            <h2>
              <Link
                to="/work"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,

                  padding: 2,
                }}
              >
                Work
              </Link>
            </h2>

            <h2>
              <Link
                to="/blog"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  padding: 2,
                }}
              >
                Blog
              </Link>
            </h2>

            <h2>
              <Link
                to="/contact"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  padding: 2,
                }}
              >
                Contact
              </Link>
            </h2>
          </div>
      </header>
    )
  }
}

export default Header
