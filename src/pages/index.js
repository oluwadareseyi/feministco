import React, { useState, useEffect } from "react"
import { removeLoader } from "../animations"
import Landing from "../components/landing"
import SEO from "../components/seo"

const IndexPage = () => {
  const [loading, setLoading] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const count = setInterval(() => {
      setLoading(loading => {
        if (loading < 100) {
          setLoading(loading + 1)
        } else {
          clearInterval(count)
          setLoading(100)
          removeLoader(setComplete)
        }
      })
    }, 30)
  }, [])
  return (
    <div className="main">
      <div className="preloader">
        <div className="load"></div>
        <div className="progress" style={{ width: `${loading}%` }}></div>
        <div className="counter">{loading}%</div>
        <div className="yellow-bg"></div>
      </div>
      <SEO title="Home" />
      {complete && <Landing />}
    </div>
  )
}

export default IndexPage
