import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
const ReadingList = () => {
  return (
    <main>
      <Layout siteTitle="Daniel J Moylan -- Author">
        <h1>Recomended Reading</h1>
        <h2>Books I love</h2>
        <ul>
          <li>Dresden Files</li>
          <li>Magicians Apprentice</li>
          <li>A Wazard of Earth Sea</li>
        </ul>
        <h2>Books Written By Friends</h2>
        <ul>
          <li>Friend Books Here</li>
          <li>Friend Books Here</li>
          <li>Friend Books Here</li>
        </ul>

        <ul></ul>
      </Layout>
    </main>
  )
}

export default ReadingList
