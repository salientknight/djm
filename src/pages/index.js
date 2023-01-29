import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <main>
      <Layout siteTitle="Daniel J Moylan -- Author">
        <h1>Welcome to the internet home of Daniel J Moylan Author</h1>
        <div className="pr-3">
          <StaticImage
            src="../images/20220415_171414.jpg"
            width="150"
            height="150"
            loading="eager"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="image of author"
            transformOptions="fit"
            className="rounded-circle "
            style={{ float: "left", marginRight: "25px" }}
          />
        </div>
        <p className="p-3">
          Daniel J Moylan is a proud product of Vermont, a family man, and an
          old-school geek. Early encounters with speculative fiction opened him
          to the world of Philosophy which he studied formally at a small
          Vermont college -- always with an eye on one day writing Science
          Fiction and Fantasy. Professionally, Daniel has worked as a computer
          programmer and adjunct professor both of which have informed his
          thinking on the topics of Epistemology, Future Casting, and
          Technology, which are recurring themes in his work. He enjoys a
          healthy dose of hobbies both mainstream and firmly planted in geek
          culture. Daniel's time is currently divided between, work, family, and
          writing. His amazing wife, daughter, and two dogs give him the love,
          motivation, and grounding need to forge forward and follow his dreams.{" "}
        </p>
      </Layout>
    </main>
  )
}

export default IndexPage
