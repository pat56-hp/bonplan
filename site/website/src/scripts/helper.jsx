const weekPlanSlide = {
    0: {
        slidesPerView: 2,
      },
      375: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
}

const partnerSlide = {
    0: {
        slidesPerView: 2,
    },
    375: {
        slidesPerView: 3,
    },
    576: {
        slidesPerView: 4,
    },
    767: {
        slidesPerView: 5,
    },
    991: {
        slidesPerView: 6,
    },
    1200: {
        slidesPerView: 8,
    },
}

const imageExtensions = [
    'jpg', 'jpeg', 'png'
]

//Verification de l'extension de l'image
const verifyExtension = (ext) => {
    const verify = imageExtensions.includes(ext)
    return verify
  }

export { weekPlanSlide, partnerSlide, verifyExtension, imageExtensions }