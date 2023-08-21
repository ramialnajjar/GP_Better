export const CultureHelper = {
  isLanguageSupported(lang = localStorage.getItem("i18nextLng")) {
    if (lang === "ar" || lang === "en") {
      return true;
    } else {
      return false;
    }
  },

  get language() {
    if (this.isLanguageSupported()) {
      return localStorage.getItem("i18nextLng");
    } else {
      return null;
    }
  },

  set language(val) {
    if (this.isLanguageSupported(val)) {
      localStorage.setItem("i18nextLng", val);
    } else {
      localStorage.setItem(
        "i18nextLng",
        process.env.REACT_APP_DEFAULT_LANGIAGE
      );
    }
  },

  resetLanguage() {
    this.language = process.env.REACT_APP_DEFAULT_LANGIAGE;
  },
};
