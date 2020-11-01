import React, { useEffect } from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import { landingAnim } from "../animations"
import Members from "./members"

const Landing = () => {
  const {
    main1,
    main2,
    main3,
    small1,
    small2,
    small3,
    small4,
    small5,
    small6,
    small7,
    small8,
    small9,
    small10,
    small11,
    small12,
    aboutImage,
  } = useStaticQuery(graphql`
    query {
      main1: file(relativePath: { eq: "main-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      main2: file(relativePath: { eq: "main-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      main3: file(relativePath: { eq: "main-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small1: file(relativePath: { eq: "small-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small2: file(relativePath: { eq: "small-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small3: file(relativePath: { eq: "small-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small4: file(relativePath: { eq: "small-4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small5: file(relativePath: { eq: "small-5.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small6: file(relativePath: { eq: "small-6.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small7: file(relativePath: { eq: "small-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small8: file(relativePath: { eq: "small-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small9: file(relativePath: { eq: "small-9.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small10: file(relativePath: { eq: "small-10.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small11: file(relativePath: { eq: "small-11.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      small12: file(relativePath: { eq: "small-12.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      aboutImage: file(relativePath: { eq: "about-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    landingAnim()
  }, [])

  const imageArr = [
    { data: main1, name: "main1", direction: "left" },
    { data: main2, name: "main2", direction: "left" },
    { data: main3, name: "main3", direction: "right" },
    { data: small1, name: "small1", direction: "left" },
    { data: small2, name: "small2", direction: "right" },
    { data: small3, name: "small3", direction: "left" },
    { data: small4, name: "small4", direction: "right" },
    { data: small5, name: "small5", direction: "left" },
    { data: small6, name: "small6", direction: "right" },
    { data: small7, name: "small7", direction: "left" },
    { data: small8, name: "small8", direction: "left" },
    { data: small9, name: "small9", direction: "left" },
    { data: small10, name: "small10", direction: "right" },
    { data: small11, name: "small11", direction: "left" },
    { data: small12, name: "small12", direction: "right" },
  ]

  return (
    <>
      <Header />
      <div className="homepage">
        <section className="hero container">
          <div className="left title">
            <span className="ov-h">
              <span>Championing</span>
            </span>{" "}
            <br />{" "}
            <span className="ov-h">
              <span>Equality For Women</span>
            </span>{" "}
            <br />{" "}
            <span className="ov-h">
              <span>In Nigerian Society.</span>
            </span>
          </div>
          <div className="right">
            The feminist coalition is a group of young Nigerian feminists formed
            in July 2020 with a mission to champion equality for women in
            Nigerian society with a core focus on education, financial freedom
            and representation in public office.
            <div className="small-hide">
              We have a vision for a Nigeria where equality for all people is a
              reality in our laws and everyday lives.
            </div>
          </div>
        </section>
        <section className="container grid-con">
          <div className="image-grid">
            {imageArr.map(({ data, name, direction }, i) => (
              <div
                key={i}
                className={`${
                  direction === "left" ? "reveal" : "reveal-right"
                } grid-child`}
                style={{ gridArea: `${name}` }}
              >
                <div className="image">
                  <Img fluid={data.childImageSharp.fluid} />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="about container">
          <div className="title">Who We Are</div>
          <div className="left">
            <div className="reveal">
              <div className="image">
                <Img fluid={aboutImage.childImageSharp.fluid} />
              </div>
            </div>
          </div>
          <div className="right">
            <p>
              In July 2020, Damilola Odufuwa and Odunayo Eweniyi decided to come
              together to create a coalition of feminist women with a vision of
              a Nigeria where equality for all people is a reality in our laws
              and everyday lives.
            </p>
            <p>
              We approached 12 other exceptional women who were equally
              passionate about changing our country and the role of women.
            </p>
            <p>
              Together with these women we became the Feminist Coalition. The
              Feminist Coalition aims to further the rights of Nigerian women by
              focusing on three (3) pillars: women’s rights & safety, financial
              equality for women; and political & legislative power for women.
            </p>
          </div>
        </section>
        {/* Members slider */}
        <Members />
      </div>
    </>
  )
}

export default Landing
