import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

export const removeLoader = setComplete => {
  const tl = gsap.timeline({
    onComplete: () => {
      setComplete(true)
    },
  })

  tl.to(
    ".load",
    {
      duration: 1.4,
      width: "100%",
      ease: "Expo.easeInOut",
    },
    "+=.8"
  )
    .to(".counter", {
      duration: 0.3,
      opacity: 0,
      display: "none",
    })
    .to(
      ".load",
      {
        duration: 0.8,
        height: "100%",
        ease: "Expo.easeInOut",
      },
      "+=.5"
    )
    .to("body", {
      duration: 0.1,
      background: "#FFE369",
    })
    .to(
      ".yellow-bg",
      {
        duration: 0.8,
        width: "100%",
        ease: "Expo.easeInOut",
      },
      "-=.1"
    )
    .to(".preloader", {
      duration: 0.5,
      opacity: 0,
      display: "none",
    })
}

export const landingAnim = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      imageAnim()
    },
  })
  tl.from(
    ".ov-h span",
    {
      duration: 1.5,
      y: 60,
      skewY: 3,
      opacity: 0,
      stagger: 0.3,
      delay: 0.1,
      ease: "Power3.easeOut",
    },
    "+=.3"
  )
    .from(
      ".hero .right",
      {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "Power3.easeOut",
      },
      "-=1.3"
    )
    .to(".image-grid", {
      duration: 0.2,
      background: "#ffffff",
      ease: "Power3.easeInOut",
    })
    .set("body", { background: "unset" })
}

const imageAnim = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.utils.toArray(".reveal").forEach(container => {
    let image = container.querySelector(".image")
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    })

    tl.set(container, { autoAlpha: 1 })
    tl.from(container, 1.5, {
      xPercent: -100,
      ease: "Expo.easeInOut",
    })
    tl.from(image, 1.5, {
      xPercent: 100,
      scale: 1.3,
      delay: -1.5,
      ease: "Expo.easeInOut",
    })
  })

  gsap.utils.toArray(".reveal-right").forEach(container => {
    let image = container.querySelector(".image")
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    })

    tl.set(container, { autoAlpha: 1 })
    tl.from(container, 1.5, {
      xPercent: 100,
      ease: "Expo.easeInOut",
    })
    tl.from(image, 1.5, {
      xPercent: -100,
      scale: 1.3,
      delay: -1.5,
      ease: "Expo.easeInOut",
    })
  })
}

export const textAnim = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.utils.toArray(".flip-text").forEach(container => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    })

    let text = container.querySelectorAll(".text")

    tl.from(text, 3, {
      opacity: 0,
      css: {
        transform: "rotate3d(0, 1, 0, 90deg)",
      },
      delay: 0.3,
      ease: "Expo.easeOut",
      stagger: {
        amount: 1,
      },
    })
  })

  gsap.utils.toArray(".anim-up").forEach(anim => {
    gsap.from(anim, {
      scrollTrigger: {
        trigger: anim,
        start: "top bottom",
        toggleActions: "play none none none",
      },
      duration: 3,
      y: 100,
      opacity: 0,
      transformOrigin: "center center",
      ease: "Power3.easeOut",
    })
  })
}
