import React, { useEffect, useState } from "react"
import { motion } from 'framer-motion';
import Seo from "../components/seo"

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
      <div className="header-wrap">
        <div className="header-inner">
          {/* <img src={haiyaWordmark} alt="wordmark" /> */}
          <span>H&nbsp;A&nbsp;I&nbsp;Y&nbsp;A</span>
        </div>
        {/* <div className="haiya-statement">
          <span>H&nbsp;A&nbsp;I&nbsp;Y&nbsp;A — A Freelancing Tool for Creative Professionals. <br /> We are currently working on an improved version of haiya.
            Get the advantage and subscribe to our mailing list for more information on our product launch and what’s to come.
            For any questions/inquiries or feedback → hello@haiya.app</span>
        </div> */}
      </div>
      <div className="subscribe-section">
        <Subscribe />
      </div>

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
          <div className="footer-outro">
            <h5>All Rights Reserved.</h5>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default IndexPage
