import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en.json";
import translationKo from "./locales/ko.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
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
