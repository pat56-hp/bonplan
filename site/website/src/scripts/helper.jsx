import { useAuthStateProvider } from "../contexts/AuthContextProvider"

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
}

//Creation de slug a parti d'un texte
const slug = (text) => {
    return text
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')    // Supprimer les caractères non alphanumériques
            .replace(/[\s-]+/g, '-')    // Remplacer les espaces et tirets multiples par un tiret
            .replace(/^-+|-+$/g, '');  // Supprimer les tirets de début et de fin
}

function createDate(timeString) {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    const now = new Date();

    now.setHours(hours);
    now.setMinutes(minutes);
    now.setSeconds(seconds);
    now.setMilliseconds(0);

    return now;
}

const parseTimeStringToDate = (timeString) => {
    if (!timeString) return null;
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(hours, minutes);
    return date;
};

export { 
    weekPlanSlide, 
    partnerSlide, 
    verifyExtension, 
    imageExtensions, 
    convertToBase64,
    slug,
    createDate,
    parseTimeStringToDate
}