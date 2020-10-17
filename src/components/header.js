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
            <h1>
              <Link
                to="/about"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  padding: 2,
                }}
              >
                About |
              </Link>
            </h1>
            
            <h1>
              <Link
                to="/work"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,

                  padding: 2,
                }}
              >
                Work |
              </Link>
            </h1>
            
            <h1>
              <Link
                to="/blog"
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                  padding: 2,
                }}
              >
                Blog |
              </Link>
            </h1>
            
            <h1>
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
            </h1>
          </div>
      </header>
    )
  }
}

export default Header
