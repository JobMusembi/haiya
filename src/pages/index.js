import React, { useEffect, useState } from "react"
import { motion } from 'framer-motion';
import Seo from "../components/seo"
import heroHand from "../assets/images/wip.svg"

//import haiyaWordmark from "../assets/logo/haiya-wordmark.png"
import Subscribe from "../components/subscribe"
import { Facebook, Instagram, Linkedin, Twitter } from '../assets/svg/social-icons';

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const IndexPage = props => {
  let defaultHeight
  let defaultWidth

  if (typeof window !== `undefined`) {
    defaultHeight = window.innerHeight
    defaultWidth = window.innerWidth
  }

  const [dimensions, setDimensions] = useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })
  useEffect(() => {
    let vh = dimensions.windowHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)

    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })
  return (
    <motion.div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.6, -0.05, 0.01, 0.9]
        }}
        className="index-wrap"
      >
        <Seo title="Home" />

        {/* header */}
        <div className="header-wrap">
          <div className="header-inner">
            {/* <img src={haiyaWordmark} alt="wordmark" /> */}
            <span>H&nbsp;A&nbsp;I&nbsp;Y&nbsp;A</span>
          </div>
        </div>

        {/* statement */}
        <div className="hero-wrap">
          <div className="hero-text">
            <h4>Site Closed! 🔒 <br />Work in Progress. 🚧</h4>
            <p>We are currently building a better version of
              HAIYA - A freelancing tool for Kenyan creative
              professionals. Stay tuned and subscribe to our
              mailing list for updates on exciting things coming
              for haiya.app <br /><br />If you have any questions, please email hello@haiya.app <br /><br /> -Haiya Team</p>
            <Subscribe />
          </div>
          <div className="hero-image">
            <img src={heroHand} alt="3d-hand" />
            <div className="footer-position">
          <div className="footer-wrap">
            <div className="footer-socials">
              <a href="https://www.instagram.com/haiyaapp/" target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>
              <a href="/" target="_blank">
                <Linkedin />
              </a>
              <a href="/" target="_blank">
                <Twitter />
              </a>
              <a href="/" target="_blank">
                <Facebook />
              </a>
            </div>

          </div>
        </div>
          </div>
        </div>

        {/* footer */}
        
      </motion.div>
    </motion.div>
  )
}

export default IndexPage
