import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'
import about1 from '../assets/images/image-about-dark.jpg'
import about2 from '../assets/images/image-about-light.jpg'

const About = () => {
  return (
    <AboutSection>
      <AboutContainer className='about-container'>
        <AboutImagesContainer className='about-images-container'>
          <img src={about1} alt="image about dark" />
        </AboutImagesContainer>
        <AboutDescriptionContainer className='about-description-container'>
          <AboutDescription className='about-description'>
            <h3>ABOUT OUR FURNITURE</h3>
            <p>
              Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
              Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </AboutDescription>
        </AboutDescriptionContainer>
        <AboutImagesContainer className='about-images-container'>
          <img src={about2} alt="image about light" />
        </AboutImagesContainer>
      </AboutContainer>
    </AboutSection>
  )
}

const AboutSection = styled.section`
  overflow: hidden;

  ${theme.mediaQueries.desktop} {
    height: 35vh;
  }
`;

const AboutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 270px 300px 270px;

  ${theme.mediaQueries.mobileSmall} {
    grid-template-rows: 240px 300px 240px;
  }

  ${theme.mediaQueries.tablet} {
    grid-template-rows: 350px 350px 350px;
  }

  ${theme.mediaQueries.desktop} {
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: 100%;
  }
`;

const AboutImagesContainer = styled.div`
  & img {
    width: 100%;
    height: 100%;
  }
`;

const AboutDescriptionContainer = styled.div`
  padding: 40px 40px;

  ${theme.mediaQueries.mobileSmall} {
    padding: 50px 24px;
  }
    
  ${theme.mediaQueries.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  ${theme.mediaQueries.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & h3 {
    letter-spacing: 0.3rem;
  }

  ${theme.mediaQueries.tablet} {
    width: 80%;
    & h3 {
      font-size: 1.8rem;
    }

    & p {
      font-size: 1.5rem;
      line-height: 1.6rem
    }
  }
`;

export default About