import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        remixes: "Remixes",
        videos: "Videos",
        about: "About Me",
        subscribe: "Subscribe", // Changed from mailingTitle to subscribe
        aboutSection: "This is the About section.",
        videosSection: "This is the Videos section.",
        heroHeading: "Voş",
        heroSubheading: "Listen now",
        streamSongs: "Stream songs",
        buySongs: "Buy songs",
        successMessage: "Successful submission! Thank you for your support!",
        aboutMeTitle: "About Me",
        aboutVoş: "About Voş",
        aboutVoşDescription:
          "Voş, pronounced 'vosh', was born and raised in San Juan, Puerto Rico. He started writing songs at the age of 16 and, after 11 years of connecting individually with music and lyrics, he is finally exposing himself as an artist. Due to his curiosity and desire to create eccentric sound proposals, his musical genre lands in experimental music that brings together genres such as House, Soul, Electronic, Rock, R&B, and Jazz. And all of this, with his Caribbean touch.",
        remixTitle: "REMIXES",
        remixDescription:
          "Are you looking for exclusive ‘house’ music for your event or activity?",
        listenOnYoutube: "Voş Remixes", // Updated key for YouTube remixes
        contactText:
          "Contact me by sending an <a href='mailto:esvoshmusic@gmail.com' class='email-link'>email</a>",
        videosTitle: "Videos",
        nameLabel: "Name",
        emailLabel: "Email",
        cityLabel: "City",
        selectWhereLabel: "Where did you hear about me?",
        submitButton: "Submit",
        selectOption: "Please choose one option:",
        spotify: "Spotify",
        apple: "Apple Music",
        amazon: "Amazon Music",
        instagram: "Instagram",
        twitter: "Twitter",
        facebook: "Facebook",
        others: "Others",
        copyright: "Copyright © {{year}} by Voş. All rights reserved.",
      },
    },
    es: {
      translation: {
        home: "Inicio",
        remixes: "Remixes",
        videos: "Videos",
        about: "Sobre mí",
        subscribe: "Subscríbete", // Changed to "Subscríbete"
        aboutSection: "Esta es la sección Sobre mí.",
        videosSection: "Esta es la sección de Videos.",
        heroHeading: "Voş",
        heroSubheading: "Escucha ahora",
        streamSongs: "Escuchar canciones",
        buySongs: "Comprar canciones",
        successMessage: "¡Envío exitoso! ¡Gracias por tu apoyo!",
        aboutMeTitle: "Sobre mí",
        aboutVoş: "Sobre Voş",
        aboutVoşDescription:
          "Voş, pronunciado 'vosh', nació y creció en San Juan, Puerto Rico. Empezó a escribir canciones a los 16 años y, luego de 11 años de conectar individualmente con la música y las letras, finalmente, se está exponiendo como artista. Debido a su curiosidad y ganas de crear propuestas sonoras excéntricas, su género musical aterriza en la música experimental que reúne géneros como el House, Soul, Electrónica, Rock, R&B, y Jazz. Y todo esto, con su toque caribeño.",
        remixTitle: "REMIXES",
        remixDescription:
          "¿Estás en busca de música ‘house’ exclusiva para tu evento o actividad?",
        listenOnYoutube: "Voş Remixes", // Updated key for YouTube remixes in Spanish
        contactText:
          "Contáctame enviando un <a href='mailto:esvoshmusic@gmail.com' class='email-link'>correo electrónico</a>",
        videosTitle: "Videos",
        nameLabel: "Nombre",
        emailLabel: "Correo electrónico",
        cityLabel: "Ciudad",
        selectWhereLabel: "¿Dónde escuchaste sobre mí?",
        submitButton: "Enviar",
        selectOption: "Por favor elige una opción:",
        spotify: "Spotify",
        apple: "Apple Music",
        amazon: "Amazon Music",
        instagram: "Instagram",
        twitter: "Twitter",
        facebook: "Facebook",
        others: "Otros",
        copyright:
          "Derechos de autor © {{year}} por Voş. Todos los derechos reservados.",
      },
    },
  },
  lng: "es", // Default language is Spanish
  fallbackLng: "es",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
