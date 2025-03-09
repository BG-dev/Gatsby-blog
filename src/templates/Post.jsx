import React from "react"
import { graphql } from "gatsby"
import { Component } from "react"

export default class Post extends Component {
  render() {
    const { title } = this.props.data.contentfulPost
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`
