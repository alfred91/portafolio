import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "./locales/es/translation.json";
import en from "./locales/en/translation.json";

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en", // Idioma de respaldo
        debug: true,
        detection: {
            order: ["queryString", "cookie", "localStorage", "navigator"],
            caches: ["localStorage", "cookie"],
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Cargar traducciones
        },

        resources: {
            es: {
                translation: es, // español
            },
            en: {
                translation: en, // inglés
            },
        },
    });

export default i18n;
