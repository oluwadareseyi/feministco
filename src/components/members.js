import { graphql, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import Slider from "react-slick"
import Left from "../assets/arrow-left.svg"
import Right from "../assets/arrow-right.svg"

import BackgroundImage from "gatsby-background-image"

const Members = () => {
  const { odun, dami } = useStaticQuery(graphql`
    query {
      odun: file(relativePath: { eq: "odun.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dami: file(relativePath: { eq: "dami.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sliderRef = useRef(null)
  const settings = {
    infinite: true,
    className: "slider",
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,

    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="members container">
      <div className="title hide anim-up">Meet Our Members</div>
      <div className="left anim-up">
        <div className="title">Meet Our Members</div>
        <div className="sub">
          We uniquely select our members. Members <br /> can choose to work on
          specific and stand <br /> alone projects in line with their passions.
        </div>
        <div className="panels">
          <div className="button">Join Us</div>
          <div
            role="switch"
            tabIndex={-1}
            onClick={() => sliderRef.current.slickPrev()}
            className="prev"
          >
            <Left />
          </div>
          <div
            role="switch"
            tabIndex={-1}
            onClick={() => sliderRef.current.slickNext()}
            className="next"
          >
            <Right />
          </div>
        </div>
      </div>
      <div className="members-slider">
        <Slider ref={sliderRef} {...settings}>
          <div className="box-container">
            <div className="reveal">
              <div className="image">
                <BackgroundImage
                  className="bg-image"
                  fluid={dami.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="content">
              <div className="name">Damilola Odufuwa</div>
              <div className="position">Founding Member</div>
            </div>
          </div>

          <div className="box-container">
            <div className="reveal">
              <div className="image">
                <BackgroundImage
                  className="bg-image"
                  fluid={odun.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="content">
              <div className="name">Odun Eweniyi</div>
              <div className="position">Founding Member</div>
            </div>
          </div>

          <div className="box-container">
            <div className="reveal">
              <div className="image">
                <BackgroundImage
                  className="bg-image"
                  fluid={odun.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="content">
              <div className="name">Odun Eweniyi</div>
              <div className="position">Founding Member</div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="panels hide">
        <div
          role="switch"
          tabIndex={-1}
          onClick={() => sliderRef.current.slickPrev()}
          className="prev"
        >
          <Left />
        </div>
        <div
          role="switch"
          tabIndex={-1}
          onClick={() => sliderRef.current.slickNext()}
          className="next"
        >
          <Right />
        </div>
      </div>
    </section>
  )
}

export default Members
