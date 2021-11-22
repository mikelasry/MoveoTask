
const BASE_URL = 'http://localhost:8003';
const USERS_COUNT = 150;
const SEED = "MIKESMOVEOTASK";

export const environment = {
  production: false,
  GOOGLE_API_KEY: "AIzaSyCGv24tjDIzajOgt358MBVJ1bblfjRKLuA",
  RAND_USER_API_URL: `https://randomuser.me/api/?results=${USERS_COUNT}&seed=${SEED}`,

  SMTP_API_KEY: "CAC1D41862AF26BA9A686877F8E78A5A533CDABA10AC356529680FB7C14FA15FBCA6961B8226FF2EE747EC1851660EAC",
  SMTP_HOST: "smtp.elasticemail.com",
  ADDRESSED: "mikelasry123@gmail.com",
};
