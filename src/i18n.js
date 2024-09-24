import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

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
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Carga las traducciones
        },
        // Puedes agregar recursos directamente si no estás usando el backend
        resources: {
            es: {
                translation: require('./locales/es/translation.json'), // Cargar español
            },
            en: {
                translation: require('./locales/en/translation.json'), // Cargar inglés
            },
        },
    });

export default i18n;
