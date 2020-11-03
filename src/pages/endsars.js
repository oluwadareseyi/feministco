import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React, { useEffect } from "react"
import { textAnim } from "../animations"
import Header from "../components/header"
import SEO from "../components/seo"

const EndSars = () => {
  const text1 = "endpolice"
  const text2 = "brutality"
  const text3 = "THE JOURNEY TO END SARS"

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
              <div className="hash anim-up">#</div>
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
        <section className="journey container">
          <div className="title-small">
            <span className="flip-text">
              {text3.split("").map((t, i) => (
                <span key={i} className="text">
                  {t}
                </span>
              ))}
            </span>
          </div>

          {/* laptops and ipads */}
          <div className="timeline lg-screen">
            <div className="left">
              <div className="timeline__content anim-up">
                <div className="topic">The Problem</div>
                <div className="sub">
                  SARS was controversial for its links to extrajudicial
                  killings, forced disappearances, extortion, torture, framing,
                  blackmail, kidnapping, illegal organ trade, armed robbery,
                  home invasions, rape of men and women, child arrests, the
                  invasion of privacy, and polluting bodies of water by
                  illegally disposing of human remains
                </div>
              </div>

              <div className="timeline__content anim-up">
                <div className="topic">The Movement I</div>
                <div className="sub">
                  Peaceful EndSARS protestors in Abuja, the nation's capital,
                  were attacked, beaten, and chased away by Federal police
                  officers, but protestors returned as they took the protests to
                  the Police Force Headquarters. Several reports on
                  international news outlets including BBC Africa and Al-Jazeera
                  showed Federal police tear-gassing protestors, shooting live
                  ammunition, and using water cannons on them.
                </div>
              </div>

              <div className="timeline__content anim-up mov-2">
                <div className="topic">The Movement II</div>
                <div className="sub">
                  Lagos, protestors marched to the Lagos State House of Assembly
                  to demand an end to SARS. Several videos shared on social
                  media showed protestors sleeping on the bare ground with no
                  bed or mat overnight as they camped in front of the House of
                  Assembly in Ikeja.
                </div>
              </div>

              <div className="timeline__content anim-up mov-3">
                <div className="topic">The Movement III</div>
                <div className="sub">
                  Back in Abuja as the protests gained more momentum and
                  exposure, protestors returned in the thousands to the Police
                  Headquarters and once again were shot at with water cannons
                  and live ammunition. Popular Twitter activist Aisha Yesufu was
                  reportedly beaten by male police officers, and her car was
                  damaged by police trucks chasing protestors in the streets of
                  Abuja.
                </div>
              </div>

              <div className="timeline__content anim-up">
                <div className="topic">The Lekki Massacre of ‘20</div>
                <div className="sub">
                  In the Lekki Massacre on the night of 20 October 2020,
                  Nigerian Armed Forces shot at EndSARS protesters at the Lekki
                  toll gate in Lagos, Nigeria. The amount of casualties is
                  disputed, with witnesses and Amnesty International saying
                  several people were shot dead while Nigerian authorities claim
                  there were no fatalities but that 25 people were wounded.
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="right">
              <div className="timeline__content anim-up">
                <div className="topic">The Beginning</div>
                <div className="sub">
                  The Special Anti-Robbery Squad (SARS) was a Nigerian Police
                  Force unit created in late 1992 to deal with crimes associated
                  with robbery, motor vehicle theft, kidnapping, cattle
                  rustling, and firearms. It was part of the Force Criminal
                  Investigation and Intelligence Department (FCIID), headed by
                  Deputy Inspector General of Police Anthony Ogbizi.
                </div>
              </div>

              <div className="timeline__content anim-up">
                <div className="topic">The Trigger I</div>
                <div className="sub">
                  Efforts to ban the SARS unit increased in October 2020 after a
                  SARS police officer shot a young Nigerian man in front of the
                  Wetland Hotel in Ughelli, Delta State. Video of the incident
                  started trending on social media, leading to nationwide
                  protests within a few days. The protests quickly expanded from
                  an online hashtag to widespread street protests in a matter of
                  days.
                </div>
              </div>

              <div className="timeline__content anim-up">
                <div className="topic">The Trigger II</div>
                <div className="sub">
                  On October 9 in Ogbomosho in Oyo State, a peaceful protestor
                  named Jimoh Isiaq was shot dead by police officers while
                  engaging in the EndSARS protests. His death at the hands of
                  police officers further increased the anger nationwide as he
                  became a martyr for protesters. Several hashtags including
                  #EndPoliceBrutality and #RememberJimoh trended on Twitter.
                </div>
              </div>

              <div className="timeline__content anim-up">
                <div className="topic">The Victory?</div>
                <div className="sub">
                  On October 11, the Inspector-General of Police Mohammed Adamu
                  announced the disbanding of the Special Anti Robbery Squad
                  (SARS) on live television and said a new tactical team will be
                  unveiled shortly. However, protests went on as Nigerians
                  believed the announcement was just "audio talk". The new
                  hashtags #EndSWAT and #SARSMUSTEND went international as
                  protestors called for the new unit to be scrapped as they
                  thought several members of the defunct SARS will be
                  re-integrated into the new unit.
                </div>
              </div>

              <div className="timeline__content anim-up">
                <div className="topic">The Trigger III</div>
                <div className="sub">
                  <p>
                    Police officers in Surulere shot and killed several
                    protestors, all of whom were participating in peaceful
                    protests. Several young people were injured and their cars
                    damaged, while others were brutalized by police officers in
                    police stations.
                  </p>
                  <p>
                    In total, eight people including a 10-year-old boy were
                    killed in Ogbomosho, Oyo State, by police bullets while at
                    least three were shot dead in Lagos—including an auto
                    mechanic who wasn't part of the protests but was killed by a
                    SARS officer in Lagos and died with his hands in his
                    pockets.
                  </p>
                </div>
              </div>

              <div className="end topic anim-up">The End?</div>
            </div>
          </div>

          {/* Mobile */}
          <div className="timeline mobile">
            <div className="timeline__content anim-up">
              <div className="topic">The Beginning</div>
              <div className="sub">
                The Special Anti-Robbery Squad (SARS) was a Nigerian Police
                Force unit created in late 1992 to deal with crimes associated
                with robbery, motor vehicle theft, kidnapping, cattle rustling,
                and firearms. It was part of the Force Criminal Investigation
                and Intelligence Department (FCIID), headed by Deputy Inspector
                General of Police Anthony Ogbizi.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Problem</div>
              <div className="sub">
                SARS was controversial for its links to extrajudicial killings,
                forced disappearances, extortion, torture, framing, blackmail,
                kidnapping, illegal organ trade, armed robbery, home invasions,
                rape of men and women, child arrests, the invasion of privacy,
                and polluting bodies of water by illegally disposing of human
                remains
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Trigger I</div>
              <div className="sub">
                Efforts to ban the SARS unit increased in October 2020 after a
                SARS police officer shot a young Nigerian man in front of the
                Wetland Hotel in Ughelli, Delta State. Video of the incident
                started trending on social media, leading to nationwide protests
                within a few days. The protests quickly expanded from an online
                hashtag to widespread street protests in a matter of days.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Movement I</div>
              <div className="sub">
                Peaceful EndSARS protestors in Abuja, the nation's capital, were
                attacked, beaten, and chased away by Federal police officers,
                but protestors returned as they took the protests to the Police
                Force Headquarters. Several reports on international news
                outlets including BBC Africa and Al-Jazeera showed Federal
                police tear-gassing protestors, shooting live ammunition, and
                using water cannons on them.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Trigger II</div>
              <div className="sub">
                On October 9 in Ogbomosho in Oyo State, a peaceful protestor
                named Jimoh Isiaq was shot dead by police officers while
                engaging in the EndSARS protests. His death at the hands of
                police officers further increased the anger nationwide as he
                became a martyr for protesters. Several hashtags including
                #EndPoliceBrutality and #RememberJimoh trended on Twitter.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Movement II</div>
              <div className="sub">
                Lagos, protestors marched to the Lagos State House of Assembly
                to demand an end to SARS. Several videos shared on social media
                showed protestors sleeping on the bare ground with no bed or mat
                overnight as they camped in front of the House of Assembly in
                Ikeja.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Victory?</div>
              <div className="sub">
                On October 11, the Inspector-General of Police Mohammed Adamu
                announced the disbanding of the Special Anti Robbery Squad
                (SARS) on live television and said a new tactical team will be
                unveiled shortly. However, protests went on as Nigerians
                believed the announcement was just "audio talk". The new
                hashtags #EndSWAT and #SARSMUSTEND went international as
                protestors called for the new unit to be scrapped as they
                thought several members of the defunct SARS will be
                re-integrated into the new unit.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Movement III</div>
              <div className="sub">
                Back in Abuja as the protests gained more momentum and exposure,
                protestors returned in the thousands to the Police Headquarters
                and once again were shot at with water cannons and live
                ammunition. Popular Twitter activist Aisha Yesufu was reportedly
                beaten by male police officers, and her car was damaged by
                police trucks chasing protestors in the streets of Abuja.
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Trigger III</div>
              <div className="sub">
                <p>
                  Police officers in Surulere shot and killed several
                  protestors, all of whom were participating in peaceful
                  protests. Several young people were injured and their cars
                  damaged, while others were brutalized by police officers in
                  police stations.
                </p>
                <p>
                  In total, eight people including a 10-year-old boy were killed
                  in Ogbomosho, Oyo State, by police bullets while at least
                  three were shot dead in Lagos—including an auto mechanic who
                  wasn't part of the protests but was killed by a SARS officer
                  in Lagos and died with his hands in his pockets.
                </p>
              </div>
            </div>

            <div className="timeline__content anim-up">
              <div className="topic">The Lekki Massacre of ‘20</div>
              <div className="sub">
                In the Lekki Massacre on the night of 20 October 2020, Nigerian
                Armed Forces shot at EndSARS protesters at the Lekki toll gate
                in Lagos, Nigeria. The amount of casualties is disputed, with
                witnesses and Amnesty International saying several people were
                shot dead while Nigerian authorities claim there were no
                fatalities but that 25 people were wounded.
              </div>
            </div>
            <div className="end topic anim-up">The End?</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EndSars
