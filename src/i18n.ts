import "@formatjs/intl-relativetimeformat/polyfill";
import "@formatjs/intl-relativetimeformat/dist/locale-data/en";
import "@formatjs/intl-relativetimeformat/dist/locale-data/es";

const {addLocaleData} = require("react-intl");
const enLocaleData = require("react-intl/locale-data/en");
const czLocaleData = require("react-intl/locale-data/es");
const {DEFAULT_LOCALE} = require("./locales");

const enTranslationMessages = require("./localizations/en.json");
const esTranslationMessages = require("./localizations/es.json");

addLocaleData(enLocaleData);
addLocaleData(czLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return {...formattedMessages, [key]: formattedMessage};
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages("en", enTranslationMessages),
  es: formatTranslationMessages("es", esTranslationMessages),
};
