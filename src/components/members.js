import { graphql, useStaticQuery } from "gatsby"
import React, { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
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
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  }
  return (
    <section className="members container">
      <div className="left">
        <div className="title">Meet Our Members</div>
        <div className="sub">
          We uniquely select our members. Members <br /> can choose to work on
          specific and stand <br /> alone projects in line with their passions.
        </div>
        <div className="panels">
          <div className="button">Join Us</div>
          <div onClick={() => sliderRef.current.slickPrev()} className="prev">
            Prev
          </div>
          <div className="next" onClick={() => sliderRef.current.slickNext()}>
            Next
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
    </section>
  )
}

export default Members
