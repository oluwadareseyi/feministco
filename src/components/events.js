import React, { useRef } from "react"
import Slider from "react-slick"

const Events = () => {
  const sliderRef = useRef(null)
  const settings = {
    infinite: true,
    className: "slider",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <section className="happen container">
      <div className="title">Other Happenings</div>
      <div className="events-slider">
        <Slider ref={sliderRef} {...settings}>
          <div className="box">
            Daily Summary <br /> Of Accounts
          </div>

          <div className="box">
            Statement on <br />
            October 20th, 2020
          </div>

          <div className="box">
            Progress Report <br />
            October 15th 2020
          </div>

          <div className="box">
            Progress Report <br />
            October 10th 2020
          </div>
        </Slider>
      </div>
      <div className="controls container">
        <div
          role="switch"
          tabIndex={-1}
          onClick={() => sliderRef.current.slickPrev()}
          className="prev"
        >
          Prev
        </div>
        <div
          role="switch"
          tabIndex={-1}
          onClick={() => sliderRef.current.slickNext()}
          className="next"
        >
          Next
        </div>
      </div>
    </section>
  )
}

export default Events
