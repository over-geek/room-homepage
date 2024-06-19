import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../utils/theme';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import image1desk from '../assets/images/desktop-image-hero-1.jpg';
import image2desk from '../assets/images/desktop-image-hero-2.jpg';
import image3desk from '../assets/images/desktop-image-hero-3.jpg';
import image1 from '../assets/images/mobile-image-hero-1.jpg';
import image2 from '../assets/images/mobile-image-hero-2.jpg';
import image3 from '../assets/images/mobile-image-hero-3.jpg';
import arrowLeft from '../assets/images/icon-angle-left.svg';
import arrowRight from '../assets/images/icon-angle-right.svg';
import arrow from '../assets/images/icon-arrow.svg';

const data = [
  {
    image: image1,
    desktopImage: image1desk,
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    link: '#',
  },
  {
    image: image2,
    desktopImage: image2desk,
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    link: '#',
  },
  {
    image: image3,
    desktopImage: image3desk,
    title: 'Manufactured with the best materials',
    description: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    link: '#',
  },
];

const Carousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const prevArrow = (
    <PrevArrow
      className="prev-arrow"
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      }}
    >
      <img src={arrowLeft} alt="" />
    </PrevArrow>
  );

  const nextArrow = (
    <NextArrow
      className="next-arrow"
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }}
    >
      <img src={arrowRight} alt="" />
    </NextArrow>
  );

  return (
    <CarouselContainer>
      <SliderContainer {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <SliderItem key={index} className='slider-item'>
            <SliderImgContainer className='slider-img-container'>
              <picture>
                <source srcSet={item.desktopImage} media='(min-width: 500px)' />
                <img src={item.image} alt='hero' />
              </picture>
            </SliderImgContainer>
            <SliderDescriptionContainer>
              <SliderDescription>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <ShopLink href={item.link}>
                  SHOP NOW
                  <img src={arrow} alt='arrow' />
                </ShopLink>
              </SliderDescription>
            </SliderDescriptionContainer>
          </SliderItem>
        ))}
      </SliderContainer>
      <ArrowContainer>
        {prevArrow}
        {nextArrow}
      </ArrowContainer>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  height: 100%;
  position: relative;
`;

const SliderContainer = styled(Slider)`
  height: 100%;
`;

const SliderItem = styled.div`
  height: 100%;

  ${theme.mediaQueries.desktop} {
    display: flex !important;
  }
`;

const SliderImgContainer = styled.div`
  height: 50%;

  &.slider-img-container img {
    width: 100%;
    height: 100%;
  }

  ${theme.mediaQueries.desktop} {
    width: 60%;
    height: 100%;
  }
`;

const SliderDescriptionContainer = styled.div`
  height: 50%;
  padding: 50px 40px;

  ${theme.mediaQueries.mobileSmall} {
    padding: 50px 20px;
  }

  ${theme.mediaQueries.tablet} {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${theme.mediaQueries.desktop} {
    height: 100%;
    width: 40%;
    padding: 100px 50px;
  }
`;

const SliderDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h2 {
    font-size: 2.5rem;
    line-height: 2rem;
  }

  ${theme.mediaQueries.mobileSmall} {
    & h2 {
      font-size: 2rem;
      line-height: 1.5rem;
    }
  }

  ${theme.mediaQueries.tablet} {
    width: 80%;
    height: 70%;
    gap: 25px;

    & h2 {
      font-size: 3.5rem;
      line-height: 2.5rem;
    }

    & p {
      font-size: 1.5rem;
      line-height: 1.6rem
    }
  }
`;

const ShopLink = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  letter-spacing: 0.5rem;
  font-weight: 600;

  & img {
    width: 40px;
  }

  ${theme.mediaQueries.mobileSmall} {
    font-size: 1.2rem;
    margin-top: 20px;

    & img {
      width: 30px;
    }
  }

  ${theme.mediaQueries.tablet} {
    font-size: 1.5rem;
    letter-spacing: 1rem;
  }

  ${theme.mediaQueries.tablet} {
    margin-top: 20px;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 50%;
  right: 0;
  background-color: black;

  :hover {
    background-color: hsl(0, 0%, 27%);
    cursor: pointer;
  }

  ${theme.mediaQueries.desktop} {
    bottom: 0;
    right: auto;
    left: 60%;
  }
`;

const Arrow = styled.div`
  display: flex;
  padding: 20px;

  ${theme.mediaQueries.desktop} {
    padding: 24px;
  }
`

const PrevArrow = styled(Arrow)`
  & img {
    width: 10px;
  }

  ${theme.mediaQueries.desktop} {
    & img {
      width: 15px;
    }
  }

  ${theme.mediaQueries.tablet} {
    & img {
      width: 15px;
    }
  }
`;

const NextArrow = styled(Arrow)`
  & img {
    width: 10px;
  }

  ${theme.mediaQueries.tablet} {
    & img {
      width: 15px;
    }
  }

  ${theme.mediaQueries.desktop} {
    & img {
      width: 15px;
    }
  }
`;

export default Carousel;