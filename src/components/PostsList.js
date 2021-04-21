import React, { Fragment } from 'react'

import PostsListItem from './PostsListItem'
import useSiteMetadata from '../hooks/use-site-config'

const PostsList = ({ posts }) => {
  const { defaultLang } = useSiteMetadata()

  return (
    <Fragment>
      {posts.map(post => {
        console.log("post.node.frontmatter",post.node.frontmatter)
        console.log("post.node.frontmatter.cover",post.node.frontmatter.cover)
        const props = {
          title: post.node.frontmatter.title,
          excerpt: post.node.excerpt,
          slug: post.node.frontmatter.slug,
          timeToRead: post.node.timeToRead,
          language: post.node.frontmatter.language || defaultLang,
          tags: post.node.frontmatter.tags || [],
          coverImage: post.node.frontmatter.cover
        }
        return <PostsListItem key={props.slug} {...props} />
      })}
    </Fragment>
  )
}
export default PostsList
