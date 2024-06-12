import React, { useEffect, useState } from 'react'
import '../App.css'

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navToggle = () => {
    const btn = document.getElementById('menu-btn')
    const overlay = document.getElementById("overlay");
    const menu =  document.getElementById('mobile-menu')
    const hamburgerBar = document.querySelectorAll('.hamburger-bar')

    setMenuOpen(!menuOpen)

    btn?.classList.toggle("open");
    overlay?.classList.toggle("overlay-show");
    menu?.classList.toggle('show-menu')
    hamburgerBar.forEach(bar => {
      bar.classList.toggle('hamburger-open-color')
    })
    document.body.classList.toggle('stop-scrolling')
  }

  useEffect(() => {
    const btn = document.getElementById('menu-btn')
    btn?.addEventListener('click', navToggle)
    return () => {
      btn?.removeEventListener('click', navToggle)
    }
  }, [])
  
  return (
    <>
      <div id="overlay"></div>
      <div id="mobile-menu" className="mobile-main-menu">
        <ul className="mobile-menu-list">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="shop">shop</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
      </div>
      <button id="menu-btn" className="hamburger" type="button">
        <span className="hamburger-top hamburger-bar hamburger-bar"></span>
        <span className="hamburger-middle hamburger-bar hamburger-bar"></span>
        <span className="hamburger-bottom hamburger-bar hamburger-bar"></span>
    </button>
    </>
  )
}

export default MobileMenu