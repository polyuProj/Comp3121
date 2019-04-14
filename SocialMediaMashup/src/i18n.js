import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import Backend from 'i18next-xhr-backend';
import LanguageDetector from "i18next-browser-languagedetector";
// not like to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init
import English from "./locale/en/language.json";
import SimplifiedChinese from "./locale/sc/language.json";
import TraditionalChinese from "./locale/tc/language.json";

const options = {
  interpolation: {
    escapeValue: false // not needed for react!!
  },

  debug: true,

  // lng: 'en',

  resources: {
    en: {
      common: English
    },
    sc: {
      common: SimplifiedChinese
    },
    tc: {
      common: TraditionalChinese
    }
  },

  fallbackLng: "en",

  ns: ["common"],

  defaultNS: "common"
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  //   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(options);

export default i18n;
