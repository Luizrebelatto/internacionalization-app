import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./en.json";
import ES from "./es.json";
import PtBR from "./pt.json";

const resources = {
  pt: PtBR,
  en: EN,
  es: ES,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
});

export default i18n;
