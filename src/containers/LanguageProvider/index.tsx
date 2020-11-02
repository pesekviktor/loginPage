import React from "react";
import {useSelector} from "react-redux";
import {createSelector} from "reselect";
import {IntlProvider} from "react-intl";

import {makeSelectLocale} from "./selectors";

export interface Props {
  messages: { [locale: string]: { [id: string]: string } };
  children?: React.ReactNode;
}

const stateSelector = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));

export default function LanguageProvider(props: Props) {
  const {locale} = useSelector(stateSelector);
  return (
    <IntlProvider locale={locale} messages={props.messages[locale]}>
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}
