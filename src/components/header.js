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
            <Link
              to="/"
              title="Home"
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
            >
              <img
                alt="UI Logo"
                src="https://contrast.now.sh/cff/40f?size=48&fontSize=2&baseline=2&fontWeight=900&radius=32&text=UI"
              />
              <span
                style={{
                  position: "absolute",
                  width: 1,
                  height: 1,
                  overflow: "hidden",
                  top: -9999,
                }}
              >
                <h4>Home</h4>
              </span>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <h4>
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
            </h4>

            <h4>
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
            </h4>

            <h4>
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
            </h4>

            <h4>
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
            </h4>
          </div>
      </header>
    )
  }
}

export default Header
