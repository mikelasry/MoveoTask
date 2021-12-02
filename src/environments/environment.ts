
const BASE_URL = 'http://localhost:8003';

const GOOGLE_API_KEY = "AIzaSyCGv24tjDIzajOgt358MBVJ1bblfjRKLuA";
const SEED = "MIKESMOVEOTASK";
const USERS_COUNT = 11;

const GOOGLE_COORD_BY_ADDRESS_API = `https://maps.googleapis.com/maps/api/geocode/xml?key=${GOOGLE_API_KEY}`
const RAND_USER_API_URL = `https://randomuser.me/api/?results=${USERS_COUNT}&seed=${SEED}`;

const SMPT_KEY = "CAC1D41862AF26BA9A686877F8E78A5A533CDABA10AC356529680FB7C14FA15FBCA6961B8226FF2EE747EC1851660EAC";
const ELASTIC_MAIL_SMPT_CLIENT_HOST = "smtp.elasticemail.com";
const MIKES_MAIL = "your_mail_here@gmail.com";

const DETAILS_URL = "details/:username";
const CONTACT_URL = "contact/:username";

export const environment = {
  production: false,
  RAND_USER_API_URL: RAND_USER_API_URL,
  GOOGLE_API_KEY: GOOGLE_API_KEY,
  GOOGLE_GEO_API: GOOGLE_COORD_BY_ADDRESS_API,

  CONTACT_URL: CONTACT_URL ,
  DETAILS_URL: DETAILS_URL,

  SMTP_API_KEY: SMPT_KEY,
  SMTP_HOST: ELASTIC_MAIL_SMPT_CLIENT_HOST,
  ADDRESSED: MIKES_MAIL,
};
