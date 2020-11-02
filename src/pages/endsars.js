import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React, { useEffect } from "react"
import { textAnim } from "../animations"
import Header from "../components/header"
import SEO from "../components/seo"

const EndSars = () => {
  const text1 = "endpolice"
  const text2 = "brutality"

  useEffect(() => {
    textAnim()
  }, [])
  const { protesters } = useStaticQuery(graphql`
    query {
      protesters: file(relativePath: { eq: "protesters.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="#EndSARS" />
      <Header />
      <div className="end-sars">
        <section className="hero">
          <BackgroundImage
            className="protesters"
            fluid={protesters.childImageSharp.fluid}
          />
          <div className="content">
            <div className="content-inner">
              <div className="hash">#</div>
              <span className="flip-text">
                {text1.split("").map((t, i) => (
                  <span key={i} className="text">
                    {t}
                  </span>
                ))}
                <br />
                {text2.split("").map((t, i) => (
                  <span key={i} className="text">
                    {t}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </section>
        <section className="journey container"></section>
      </div>
    </>
  )
}

export default EndSars
