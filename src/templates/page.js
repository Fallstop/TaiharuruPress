import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

const Page = props => {
  const page = props.data.page
  return (
    <Layout location={props.location}>
      <SEO
        title={page.frontmatter.title}
        description={page.excerpt}
        path={page.frontmatter.slug}
        cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      />

      <Hero
        heroImg={page.frontmatter.highlightPhoto && page.frontmatter.highlightPhoto.publicURL}
        title={page.frontmatter.title}
      />

      <Wrapper>
        <article>
          <Content content={page.body} date={page.frontmatter.date} />
        </article>
      </Wrapper>

    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query($slug: String!) {
    page: mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        disqus
        highlightPhoto {
          publicURL
        }
        cover {
          publicURL
        }
      }
    }
  }
`
