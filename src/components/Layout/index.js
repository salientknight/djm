import * as React from "react"
import Header from "../Header"
import { Container } from "react-bootstrap"
import "../../styles/index.scss"

const Layout = ({ siteTitle, children }) => {
  return (
    <Container className="border border-dark rounded p-3 bg-secondary">
      <Container className="border border-primary rounded p-0 bg-light">
        <title>{siteTitle}</title>
        <Header siteTitle={siteTitle} />
        <Container className="p-3 ">{children}</Container>
      </Container>
    </Container>
  )
}

export default Layout
