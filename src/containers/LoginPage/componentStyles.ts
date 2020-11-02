import styled from "styled-components";
import {Button, Select, TextField} from "@material-ui/core";

export const LoginLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background.color};
`;

export const Logo = styled.img`
  width: 150px;
`;

export const EventTypeSelectText = styled.div`
  min-width: 150px;
  padding: 0 5px 0 5px;
`;

export const LoginFormLayout = styled.div`
  width: 60%;
  min-width: 300px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`;
export const LoginFormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const LoginFormFooterSelect = styled(Select)`
  width: 150px;
  justify-content: space-between;
`;

export const LoginForm = styled.div`
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  padding: 10%;
  ${(props) => props.theme.radiusStyle}
`;

export const LoginInput = styled(TextField)`
  width: 100%;
  fieldset {
    ${(props) => props.theme.radiusStyle}
  }
`;
export const LoginLink = styled.a`
  color: ${(props) => props.theme.navyBlue};
`;

export const ActionsHolder = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  ${(props) => props.theme.radiusStyle}
`;
