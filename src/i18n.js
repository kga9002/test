import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en.json";
import translationKo from "./locales/ko.json";
import translationJa from "./locales/ja.json";
import translationEs from "./locales/es.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
  ja: {
    translation: translationJa,
  },
  es: {
    translation: translationEs,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ko",
  debug: true,
  // keySeparator: ".", // 키 접근 방법
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  lng: localStorage.getItem("lng") || "ko",
});

export default i18n;
