/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import Loader from "../components/loader"

//styles
import "../styles/App.scss"


const Layout = ({ children }) => {

  const [finishLoading, setFinishLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setFinishLoading(false)
    }, 3000)
  }, [])

  return (
    <div className="app">
      {finishLoading ? (
        <Loader key={"home2"} />
      ) : (
        <div>
          <main>{children}</main>
        </div>
      )}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
