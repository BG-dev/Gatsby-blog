import * as React from "react"

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <div className={styles.textCenter}>
    <h1>
      Welcome to <b>Gatsby!</b>
    </h1>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
