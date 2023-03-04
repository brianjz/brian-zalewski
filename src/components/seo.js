import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(title)
  return (
    <title>{title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}</title>
  )
}

export default Seo