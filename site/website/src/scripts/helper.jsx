import { useAuthStateProvider } from "../contexts/AuthContextProvider"

const weekPlanSlide = {
    0: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      930: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
}

const partnerSlide = {
    0: {
        slidesPerView: 1,
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

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

const apiUrl = () => import.meta.env.VITE_API_DOMAIN

const stripHtmlTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
};

const getShortDescription = (html, length) => {
    const text = stripHtmlTags(html);
    return text.length > length ? text.substring(0, length) + '...' : text;
};

const getDate = (date) => {
    const dateObj = new Date(date);

    // Extraire les parties de la date
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Les mois sont 0-indexés
    const year = dateObj.getFullYear();

    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    // Formatter la date dans le format souhaité
    const formattedDate = `${day}-${month}-${year} à ${hours}:${minutes}`;

    return formattedDate
}

export { 
    weekPlanSlide, 
    partnerSlide, 
    verifyExtension, 
    imageExtensions, 
    convertToBase64,
    slug,
    createDate,
    parseTimeStringToDate,
    debounce,
    apiUrl,
    stripHtmlTags,
    getShortDescription,
    getDate
}