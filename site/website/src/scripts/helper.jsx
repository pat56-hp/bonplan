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

//Convertir un fichier en base64
const convertToBase64 = async (file) => {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => reader.result

    /* return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result.split(',')[1]); // obtenir la partie base64
        reader.onerror = reject;
    }); */
}

export { 
    weekPlanSlide, 
    partnerSlide, 
    verifyExtension, 
    imageExtensions, 
    convertToBase64
 }