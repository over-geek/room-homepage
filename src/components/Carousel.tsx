import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';
import image1 from '../assets/images/mobile-image-hero-1.jpg';
import image2 from '../assets/images/mobile-image-hero-2.jpg';
import image3 from '../assets/images/mobile-image-hero-3.jpg';
import arrowLeft from '../assets/images/icon-angle-left.svg';
import arrowRight from '../assets/images/icon-angle-right.svg';

const data = [
  {
    image: image1,
    title: 'Discover innovative ways to decorate',
    description: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    link: '#',
  },
  {
    image: image2,
    title: 'We are available all across the globe',
    description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    link: '#',
  },
  {
    image: image3,
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
    <div
      className="prev-arrow"
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickPrev();
        }
      }}
    >
      <img src={arrowLeft} alt="" />
    </div>
  );

  const nextArrow = (
    <div
      className="next-arrow"
      onClick={() => {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
      }}
    >
      <img src={arrowRight} alt="" />
    </div>
  );

  return (
    <div>
      <Slider {...settings} ref={sliderRef} className="slider">
        {data.map((item, index) => (
          <div className='slider-item' key={index}>
            <div className='slider-img-container'>
              <img src={item.image} alt="slide 1" className='slider-image' />
            </div>
            <div className='slider-description-container'>
              <div className='slider-description'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.link} className='shop-link'>SHOP NOW</a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='arrow-container'>
        {prevArrow}
        {nextArrow}
      </div>
    </div>
  );
};

export default Carousel;