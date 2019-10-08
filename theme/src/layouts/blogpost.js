import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Skeleton from '../components/Skeleton'
import Icon from '../components/Icon'
import SEO from '../components/seo'
import Icons from '../components/Icon/Icons'
import Button from '../components/Button'

const StyledBlogHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const BlogPost = ({
  data: {
    blogPost: post,
    site: { siteMetadata: meta },
  },
}) => {
  const theme = React.useContext(ThemeContext)
  const { id, slug } = post
  const blogIdAnchor = `/blog/#${id}`
  const { title, image, tags, excerpt } = post
  const seoTags = [`blog`]
  const shareText = encodeURIComponent(title)
  const twitterUsername = meta.social
    .filter(s => s.name.toLowerCase() === 'twitter')[0]
    .url.split('/')
    .pop()

  const links = {
    blogIdAnchor,
    linkedinDeep: `linkedin://shareArticle?mini=true&url=${
      meta.siteUrl
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${excerpt}.slice(0, 80)}...`
    )}&source=${meta.siteUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${
      meta.siteUrl
    }${slug}&title=${shareText}&summary=${encodeURIComponent(
      `${excerpt}.slice(0, 80)}...`
    )}&source=${meta.siteUrl}`,
    twitterDeep: `twitter://intent/tweet?url=${
      meta.siteUrl
    }${slug}&text=${shareText}&hashtags=${tags || ''}&via=${twitterUsername}`,
    twitter: `https://twitter.com/intent/tweet?url=${
      meta.siteUrl
    }${slug}&text=${shareText}&hashtags=${tags || ''}&via=${twitterUsername}`,
  }

  return (
    <Skeleton>
      <SEO
        keywords={seoTags.concat(tags)}
        title={title}
        siteUrl={`${meta.siteUrl}${slug}`}
        description={`${excerpt.slice(0, 140)}...`}
        image={image ? image.publicURL : ''}
      />
      <article>
        <StyledBlogHeader>
          <Button.back anchor={blogIdAnchor} />
          <Icons theme={theme}>
            <Icon icon="linkedin" link={links.linkedin} share invert />
            <Icon icon="twitter" link={links.twitter} share />
          </Icons>
        </StyledBlogHeader>
        <div>
          <header>
            <h1>{title}</h1>
            <span className="date" style={{ position: 'relative', top: '-1rem' }}>
              {post.date}
            </span>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </article>
    </Skeleton>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    blogPost: PropTypes.object.isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
}

export default BlogPost