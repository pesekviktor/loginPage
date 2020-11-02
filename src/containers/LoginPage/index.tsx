import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useInjectSaga} from "redux-injectors";
import {login} from "./saga";
import {
  ActionsHolder,
  LoginButton,
  LoginForm,
  LoginFormFooter,
  LoginFormFooterSelect,
  LoginFormLayout,
  LoginInput,
  LoginLayout,
  LoginLink,
  Logo,
} from "./componentStyles";
import {makeSelectLoginError, makeSelectLoginLoading} from "../App/selectors";
import {FormattedMessage, useIntl} from "react-intl";
import messages from "./messages";
import {FormControl, InputLabel, MenuItem} from "@material-ui/core";
import {themes} from "../ThemesProvider/themes";
import {appLocales} from "../../locales";
import {changeTheme} from "../ThemesProvider/actions";
import {changeLocale} from "../LanguageProvider/actions";
import {postLogin} from "../App/actions";
import LoadingIndicator from "../../components/LoadingIndicator";

const LOGIN_KEY = "LOGIN_KEY";

const LoginPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(makeSelectLoginLoading());
  const loginError = useSelector(makeSelectLoginError());
  const t = useIntl();

  useInjectSaga({key: LOGIN_KEY, saga: login});

  const onThemeChange = (event) => {
    dispatch(changeTheme(event.target.value));
  };

  const onLanguageChange = (event) =>
    dispatch(changeLocale(event.target.value));

  const executeLogin = (form) => dispatch(postLogin(form));

  return (
    <LoginLayout>
      <LoginFormLayout>
        <LoginForm>
          {loading ? (
            <LoadingIndicator/>
          ) : (
            <>
              <Logo src={"kidsloop_min_logo.svg"}/>
              <h1>
                <FormattedMessage {...messages["header"]} />
              </h1>
              <form onSubmit={executeLogin}>
                <LoginInput
                  name={"username"}
                  autoComplete={'username'}
                  variant={"outlined"}
                  placeholder={t.formatMessage(messages["username"])}
                />
                <LoginInput
                  type={"password"}
                  autoComplete={'current-password'}
                  error={!!loginError}
                  style={{
                    marginTop: 10,
                  }}
                  name={"username"}
                  variant={"outlined"}
                  placeholder={t.formatMessage(messages["password"])}
                />
                <ActionsHolder>
                  <LoginLink href={"#"} style={{flex: 1}}>
                    {t.formatMessage(messages["forgotPassword"])}
                  </LoginLink>
                  <LoginButton
                    variant={"contained"}
                    color={"primary"}
                    type={"submit"}
                  >
                    {t.formatMessage(messages["header"])}
                  </LoginButton>
                </ActionsHolder>
                <LoginLink
                  href={"#"}
                  style={{
                    marginTop: 50,
                    display: "block",
                  }}
                >
                  {t.formatMessage(messages["createAccount"])}
                </LoginLink>
              </form>
            </>
          )}
        </LoginForm>
        <LoginFormFooter>
          <FormControl>
            <InputLabel id="themeLabel">
              {t.formatMessage(messages["selectTheme"])}
            </InputLabel>
            <LoginFormFooterSelect
              labelId="themeLabel"
              onChange={onThemeChange}
              value={''}
            >
              {Object.keys(themes).map((themeKey) => (
                <MenuItem key={themeKey} value={themeKey}>
                  {t.formatMessage(messages[themeKey])}
                </MenuItem>
              ))}
            </LoginFormFooterSelect>
          </FormControl>
          <FormControl>
            <InputLabel id="languageLabel">
              {t.formatMessage(messages["selectLanguage"])}
            </InputLabel>
            <LoginFormFooterSelect
              labelId={"languageLabel"}
              onChange={onLanguageChange}
              value={''}
            >
              {appLocales.map((language) => (
                <MenuItem key={language} value={language}>
                  {t.formatMessage(messages[language])}
                </MenuItem>
              ))}
            </LoginFormFooterSelect>
          </FormControl>
        </LoginFormFooter>
      </LoginFormLayout>
    </LoginLayout>
  );
};

export default LoginPage;
