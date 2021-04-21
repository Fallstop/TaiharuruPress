import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Flag from './Flag';
import TagList from './TagList';
import useSiteMetadata from '../hooks/use-site-config';
import useSiteImages from '../hooks/use-site-images';
import styled from 'styled-components';
import { Bull, ReadingTime } from './Commons';


const PreviewContainer = styled.aside`
width: 20em;
height: 30em;
margin-bottom: 2em;
@media (max-width: 780px) {
  width: 100%;
  margin-bottom: 1em;

}
`;

const Preview = styled.article`
  margin: 0px 2em 30px 2em;
  cursor: pointer;

  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);
  


  &:hover {
    box-shadow: 0 0 0 0, 0 6px 12px var(--color-grey300);
    transition: all 0.3s ease;
    transform: translate3D(0, -1px, 0);
  }


`;

const PreviewCover = styled.div`
height: 30em;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
  border-radius: 5px;


  
  position: relative;
  
`;

const PreviewContent = styled.div`
  position: absolute;
  bottom: 0;
  padding: 20px;
  flex: 1 1 300px;
  background-color: var(--color-secondaryContentBackgroundTransparent);
  

  border-radius: 5px;
  @media (min-width: 780px) {
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  header {
    padding: 0 0 10px 0;
  }
  section {
    padding-bottom: 10px;
  }
  footer {
    font-size: 0.8em;
  }
  height: auto;
`;

const PostsListItem = props => {
  // const { title, excerpt, slug, language, tags, timeToRead, coverImage } = props
  const { defaultLang } = useSiteMetadata();
  const {
    tags,
    coverImage,
    title,
    slug,
    language,
    excerpt,
    timeToRead
  } = props;
  const { siteCover } = useSiteMetadata();
  const { fluid } = useSiteImages(siteCover);
  const heroImg = (coverImage && coverImage.publicURL) || fluid.src;
  return (
    <Fragment>

      <PreviewContainer>


        <Preview >

          <Link to={`/${slug}`} aria-label={`View ${title} article`}>
            <PreviewCover
              style={{ backgroundImage: `url("${heroImg}")` }}
            >
              <PreviewContent>
                <header>
                  <h2>
                    {defaultLang !== language && <Flag language={language} />}
                    {title}
                  </h2>
                </header>
                <section>
                  <p>{excerpt}</p>
                </section>
                <footer>
                  <ReadingTime min={timeToRead} />
                </footer>
              </PreviewContent>
            </PreviewCover>
          </Link>
        </Preview>

      </PreviewContainer>

    </Fragment>
  );
};
export default PostsListItem;
