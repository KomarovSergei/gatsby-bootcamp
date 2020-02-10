import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const appAuthor = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>Created by {appAuthor.site.siteMetadata.author} © 2020</p>
    </footer>
  )
}

export default Footer
