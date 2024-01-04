import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../LoginPage/LoginPageStyles";
import Colors, { Container } from "./../../AppStyles";
import { ButtonContainer } from "./RegisterPageStyles";

import OpenEyeIcon from "./../../../public/images/opened-eye.svg";
import ClosedEyeIcon from "./../../../public/images/closed-eye.svg";
import { registerUser } from "../../api";
import {
  validateEmail,
  validateUsername,
  validatePassword,
} from "../../validation";

const RegisterPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [infoBoxVisible, setInfoBoxVisible] = useState(false);

  const handleInfoButtonClick = () => {
    setInfoBoxVisible(!infoBoxVisible);
  };
  const [registrationError, setRegistrationError] = useState<string | null>(
    null
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    setErrorFunction: React.Dispatch<React.SetStateAction<boolean>>,
    validationFunction: (value: string) => boolean
  ) => {
    const newValue = event.target.value;
    setFunction(newValue);

    setErrorFunction(!validationFunction(newValue));
    setRegistrationError(null);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegistration = async () => {
    try {
      await registerUser(email, username, password);
      setRegistrationError(null);
    } catch (error) {
      console.log("Ошибка:", error);
      setRegistrationError(
        "Ошибка при регистрации. Пожалуйста, попробуйте снова."
      );
    }
  };

  const isEmailValid = validateEmail(email);

  return (
    <Container>
      <S.CenteredContainer>
        <S.Road src="./images/road.svg" alt="Road" />
        <S.LoginWrapper>
          <Link to="/">
            <S.Logo
              src="./../logo.svg"
              alt="Logo"
              style={{
                marginBottom: registrationError ? "11px" : undefined,
              }}
            />
          </Link>
          <S.Header>Регистрация</S.Header>
          <S.InputContainer>
            <S.FirstRow>
              <S.FirstInput
                type="text"
                placeholder="Почта"
                value={email}
                onChange={(e) =>
                  handleInputChange(e, setEmail, setEmailError, validateEmail)
                }
                style={{
                  color:
                    emailError || !isEmailValid
                      ? `${Colors.red}`
                      : `${Colors.dark}`,
                }}
              />
              <div>
                <S.InfoBox
                  style={{
                    display: infoBoxVisible ? "block" : "none",
                  }}>
                  пароль должен быть бла бла бла
                </S.InfoBox>
                <S.InfoButton
                  onClick={handleInfoButtonClick}
                  disabled={
                    !passwordError &&
                    !usernameError &&
                    !emailError 
                    
                    
                  }>
                  i
                </S.InfoButton>
              </div>
            </S.FirstRow>
            <S.Input
              type="text"
              placeholder="Логин"
              value={username}
              onChange={(e) =>
                handleInputChange(
                  e,
                  setUsername,
                  setUsernameError,
                  validateUsername
                )
              }
              style={{
                color: usernameError ? `${Colors.red}` : `${Colors.dark}`,
              }}
            />

            <S.PasswordInputContainer>
              <S.InputPassword
                type={showPassword ? "text" : "password"}
                placeholder="Пароль"
                value={password}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    setPassword,
                    setPasswordError,
                    validatePassword
                  )
                }
                style={{
                  color: passwordError ? `${Colors.red}` : `${Colors.dark}`,
                }}
              />
              <S.ShowPasswordToggle onClick={toggleShowPassword}>
                {showPassword ? (
                  <img src={ClosedEyeIcon} alt="Closed Eye" />
                ) : (
                  <img src={OpenEyeIcon} alt="Open Eye" />
                )}
              </S.ShowPasswordToggle>
            </S.PasswordInputContainer>
          </S.InputContainer>
          {registrationError && <S.ErrorText>{registrationError}</S.ErrorText>}
          <ButtonContainer>
            <Link to="/login">
              <S.LoginButton type="button">Войти</S.LoginButton>
            </Link>
            <S.RegisterButton
              type="button"
              onClick={handleRegistration}
              disabled={
                passwordError ||
                usernameError ||
                emailError ||
                !isEmailValid ||
                !password ||
                !username ||
                !email
              }>
              Зарегистрироваться
            </S.RegisterButton>
          </ButtonContainer>
        </S.LoginWrapper>
      </S.CenteredContainer>
    </Container>
  );
};

export default RegisterPage;
