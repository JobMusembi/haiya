import * as React from "react"
import { motion } from 'framer-motion';
import Seo from "../components/seo"

import Subscribe from "../components/subscribe"
import { Facebook, Instagram, Linkedin, Twitter } from '../assets/svg/social-icons';

const IndexPage = () => (
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
        <span>HAIYA</span>
      </div>
    </div>
    <div className="subscribe-section">
      <Subscribe />
    </div>

    <div className="footer-position">
      <div className="footer-wrap">
        <div className="footer-socials">
          <a href="/" target="_blank">
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

export default IndexPage
