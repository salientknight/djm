import * as React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => {
  return (
    <Navbar expand="md" bg="primary" variant="dark" className="p-4">
      <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="NavbarResponsive" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav as="ul" className="m-auto">
          <Nav.Item as="li">
            <Link to="/books" className="nav-link" activeClassName="active">
              Books
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/news" className="nav-link" activeClassName="active">
              News
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/readinglist"
              className="nav-link"
              activeClassName="active"
            >
              Reading List
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link
              to="/mailinglist"
              className="nav-link"
              activeClassName="active"
            >
              Mailing List
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
