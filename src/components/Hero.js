import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import useSiteImages from '../hooks/use-site-images'

import BackgroundImage from 'gatsby-background-image'


const BackgroundSection = ({ className, imageName, children }) => {
  const result = useStaticQuery(
    graphql`
      {
        allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
    // graphql`
    // query {
    //   desktop: file(relativePath: { eq: "${imageName}" }) {
    //     childImageSharp {
    //       fluid(quality: 90, maxWidth: 1920) {
    //         ...GatsbyImageSharpFluid_withWebp
    //       }
    //     }
    //   }
    // }
  // `
  )
  const items = result.allFile.edges
  const image = items.find(edge => edge.node.relativePath === imageName)
  if (image === undefined) {
    console.log(`Unable to find image: ${imageName} (in content/images), using backup process`)
    return (
      <div
      className={className}
      
      style={{ backgroundImage: `url("${imageName}")`}}
    >
      {children}
    </div>
    )
  }
  // Set ImageData.
  const imageData = image.node.childImageSharp.fluid;

  

  return (
    <BackgroundImage
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}


const BackgroundSectionStyled = styled(BackgroundSection)`
  position: relative;
  display: table;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 50px;
  color: var(--color-white);
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
`

const HeroSubTitle = styled.h2`
  margin: 10px 50px;
  color: var(--color-white);
  text-shadow: 2px 2px 8px rgb(0, 0, 0);
  display: flex;
  justify-content: center;
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const imgName = props.heroImg || siteCover;
  return (
    <BackgroundSectionStyled imageName={imgName}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
      </TitleContainer>
    </BackgroundSectionStyled>
  )
}

export default Hero
