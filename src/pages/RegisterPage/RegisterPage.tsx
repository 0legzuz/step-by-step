import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../LoginPage/LoginPageStyles";
import Colors, { Container } from "./../../AppStyles";
import { ButtonContainer, RegisterWrapper } from "./RegisterPageStyles";

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
  const [secondPassword, setSecondPassword] = useState(""); // Fixed the state variable name
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [secondPasswordError, setSecondPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const [infoBoxVisible, setInfoBoxVisible] = useState(false);
  const [showCheckEmailHeader, setShowCheckEmailHeader] = useState(false);

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

  const handleSecondPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value;
    setSecondPassword(newValue); // Update the state variable for the second password

    if (password !== newValue) {
      setSecondPasswordError(true);
    } else {
      setSecondPasswordError(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleShowSecondPassword = () => {
    setShowSecondPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleRegistration = async () => {
    try {
      await registerUser(email, username, password);
      setRegistrationError(null);
      setShowCheckEmailHeader(true);
    } catch (error) {
      setShowCheckEmailHeader(false);
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
        <RegisterWrapper>
          <Link to="/">
            <S.Logo
              src="./../logo.svg"
              alt="Logo"
              style={{
                marginBottom: registrationError ? "11px" : undefined,
              }}
            />
          </Link>
          {!showCheckEmailHeader ? (
            <>
              <S.Header>Регистрация</S.Header>
              <S.InputContainer>
                <S.FirstRow>
                  <S.FirstInput
                    type="text"
                    placeholder="Почта"
                    value={email}
                    onChange={(e) =>
                      handleInputChange(
                        e,
                        setEmail,
                        setEmailError,
                        validateEmail
                      )
                    }
                    style={{
                      color:
                        emailError || !isEmailValid
                          ? `${Colors.red}`
                          : `${Colors.green}`,
                    }}
                  />
                  <div>
                    <S.InfoBox
                      style={{
                        display: infoBoxVisible ? "block" : "none",
                      }}>
                      <div>
                        <strong>Почта вида:</strong>
                        <p>example@example.com</p>
                      </div>

                      <div>
                        <strong>Логин:</strong>
                        <ul>
                          <li>Длина: 4-30 символов </li>
                          <li>Допустимые символы:</li>
                          <ul>
                            <li>Буквы (верхний и нижний регистр): A-Z, a-z</li>
                            <li>Цифры: 0-9</li>
                            <li>Дополнительные символы: _, -</li>
                          </ul>
                        </ul>
                      </div>

                      <div>
                        <strong>Пароль:</strong>
                        <ul>
                          <li>Длина: 8-100 символов </li>
                          <li>Допустимые символы:</li>
                          <ul>
                            <li>Буквы (верхний и нижний регистр): A-Z, a-z</li>
                            <li>Цифры: 0-9</li>
                            <li>
                              Специальные символы: ! @ # $ % ^ & * ( ) _ + - =
                              &#123; &#125; [ ] | ; : '” , . &lt; &gt; / ?
                            </li>
                          </ul>
                        </ul>
                      </div>
                    </S.InfoBox>
                    <S.InfoButton
                      onClick={handleInfoButtonClick}
                      disabled={
                        !passwordError && !usernameError && !emailError
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
                    color: usernameError ? `${Colors.red}` : `${Colors.green}`,
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
                      color: passwordError
                        ? `${Colors.red}`
                        : `${Colors.green}`,
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
                <S.PasswordInputContainer>
                  <S.InputPassword
                    type={showSecondPassword ? "text" : "password"}
                    placeholder="Повторите пароль"
                    value={secondPassword}
                    onChange={(e) => handleSecondPasswordInputChange(e)} // Removed unnecessary argument
                    style={{
                      color: secondPasswordError
                        ? `${Colors.red}`
                        : `${Colors.green}`,
                    }}
                  />
                  <S.ShowPasswordToggle onClick={toggleShowSecondPassword}>
                    {showSecondPassword ? (
                      <img src={ClosedEyeIcon} alt="Closed Eye" />
                    ) : (
                      <img src={OpenEyeIcon} alt="Open Eye" />
                    )}
                  </S.ShowPasswordToggle>
                </S.PasswordInputContainer>
              </S.InputContainer>
              {registrationError && (
                <S.ErrorText>{registrationError}</S.ErrorText>
              )}
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
            </>
          ) : (
            <S.Header
              style={{
                textAlign: "center",
                color: Colors.dark,
                fontWeight: 400,
              }}>
              Подтвердите почту
            </S.Header>
          )}
        </RegisterWrapper>
      </S.CenteredContainer>
    </Container>
  );
};

export default RegisterPage;
