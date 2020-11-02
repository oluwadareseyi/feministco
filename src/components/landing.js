import React, { useEffect } from "react"
import Img from "gatsby-image"
import { graphql, Link, useStaticQuery } from "gatsby"
import Header from "./header"
import { landingAnim } from "../animations"
import Members from "./members"
import Events from "./events"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Insta from "../assets/instagram.svg"
import Twitter from "../assets/twitter.svg"

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
    finance,
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

      finance: file(relativePath: { eq: "finance.png" }) {
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
    { data: small1, name: "small1", direction: "right" },
    { data: small2, name: "small2", direction: "left" },
    { data: small3, name: "small3", direction: "right" },
    { data: small4, name: "small4", direction: "left" },
    { data: small5, name: "small5", direction: "right" },
    { data: small6, name: "small6", direction: "left" },
    { data: small7, name: "small7", direction: "right" },
    { data: small8, name: "small8", direction: "right" },
    { data: small9, name: "small9", direction: "right" },
    { data: small10, name: "small10", direction: "left" },
    { data: small11, name: "small11", direction: "right" },
    { data: small12, name: "small12", direction: "left" },
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
        <section className="finances container">
          <div className="title">What We Have Done.</div>
          <div className="sub">
            Here is a summary of the total funds we received and disbursed (in
            Naira) as of <br /> October 22nd, 2020: Total received =
            ₦147,855,788.28 (includes donations in USD, <br /> CAD, GBP, EUR,
            GHS, KES, and BTC)
          </div>

          <div className="summary-con">
            <div className="left">
              <div className="reveal">
                <div className="image">
                  <Img fluid={finance.childImageSharp.fluid} />
                </div>
              </div>
            </div>

            <div className="right">
              <ul>
                <li>Total disbursed = ₦60,403,235.00</li>
                <li>Total left = ₦87,452,553.28</li>
              </ul>
              <div className="note">
                The remaining funds will be channeled through the following
                initiatives/organizations:
              </div>
              <ul>
                <li>#EndSARSresponse (Medical) - ₦20,114,087.25</li>
                <li>The Legal Aid Network - ₦15,741,459.59</li>
                <li>
                  Relief for victims of police brutality and families of the
                  deceased - ₦40,228,174.51
                </li>
                <li>Memorial for the Fallen - ₦5,247,153.197</li>
                <li>#EndSARSMentalHealthSupport - ₦6,121,678.73</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Other happenings */}
        <Events />

        {/* footer */}
        <footer className="container">
          <Link to="/" className="logo">
            <img src={require("../images/femco.png")} alt="feminist" />
          </Link>
          <div className="socials">
            <div className="twitter">
              <span>
                <Twitter />
              </span>
              <span>@feminist_co</span>
            </div>
            <div className="insta">
              <span>
                <Insta />
              </span>
              <span>@feminist.co</span>
            </div>
          </div>

          <div className="nav-items">
            <div className="nav-item">About Us</div>
            <div className="nav-item">Account Summary</div>
            <Link to="/endsars" className="nav-item">
              #EndSARS
            </Link>
            <div className="nav-item">Contact Us</div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Landing
