import React from 'react'
import about1 from '../assets/images/image-about-dark.jpg'
import about2 from '../assets/images/image-about-light.jpg'

const About = () => {
  return (
    <section>
      <div className='about-container'>
        <div className='about-images-container'>
          <img src={about1} alt="image about dark" />
        </div>
        <div className='about-description-container'>
          <div className='about-description'>
            <h3>ABOUT OUR FURNITURE</h3>
            <p>
              Our multifunctional collection blends design and function to suit your individual taste.
              Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
              Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
          </div>
        </div>
        <div className='about-images-container'>
          <img src={about2} alt="image about light" />
        </div>
      </div>
    </section>
  )
}

export default About