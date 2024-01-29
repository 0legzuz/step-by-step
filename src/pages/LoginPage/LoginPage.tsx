import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPageStyles";
import { loginUser } from "../../api";

import Colors, { Container } from "./../../AppStyles";
import { validateIdentifier, validatePassword } from "../../validation";

import OpenEyeIcon from "./../../../public/images/opened-eye.svg";
import ClosedEyeIcon from "./../../../public/images/closed-eye.svg";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [identifierError, setIdentifierError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [loginError, setLoginError] = useState<string | null>(null);

const [infoBoxVisible, setInfoBoxVisible] = useState(false);

const handleInfoButtonClick = () => {
  setInfoBoxVisible(!infoBoxVisible);
};
    const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    // Выполнение запроса на вход пользователя
    const user = await loginUser(identifier, password);

    if (user) {
      localStorage.setItem("registrationStatus", "success");
      // Если вход успешен, перенаправляем пользователя на главную страницу
      navigate("/");
    } else {
      // Если вход не удался, обработка ошибки и отображение сообщения
      setLoginError("Ошибка входа. Пожалуйста, проверьте введенные данные.");
    }
  };

const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFunction: React.Dispatch<React.SetStateAction<string>>,
  setErrorFunction: React.Dispatch<React.SetStateAction<boolean>>,
  validationFunction: (value: string) => boolean
) => {
  const newValue = event.target.value;
  setFunction(newValue);

  setErrorFunction(!validationFunction(newValue));
  setLoginError(null);
};


const toggleShowPassword = () => {
  setShowPassword((prevShowPassword) => !prevShowPassword);
};
  return (
    <Container>
      <S.CenteredContainer>
        <S.Road src="./images/road.svg" alt="Road" />
        <S.LoginWrapper>
          <Link to="/">
            <S.Logo src="./../logo.svg" alt="Logo" />
          </Link>
          <S.Header>Вход в аккаунт</S.Header>
          <S.InputContainer>
            <S.FirstRow>
              <S.FirstInput
                type="text"
                placeholder="Почта или логин"
                value={identifier}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    setIdentifier,
                    setIdentifierError,
                    validateIdentifier
                  )
                }
                style={{
                  color: identifierError ? `${Colors.red}` : `${Colors.green}`,
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
                  disabled={!passwordError && !identifierError}>
                  i
                </S.InfoButton>
              </div>
            </S.FirstRow>
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
                  color: passwordError ? `${Colors.red}` : `${Colors.green}`,
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
            {loginError && <S.ErrorText>{loginError}</S.ErrorText>}
          </S.InputContainer>
          <S.ButtonContainer>
            <S.LoginButton
              type="button"
              onClick={handleLogin}
              disabled={
                passwordError || identifierError || !identifier || !password
              }>
              Войти
            </S.LoginButton>
            <Link to="/register">
              <S.RegisterButton type="button">
                Зарегистрироваться
              </S.RegisterButton>
            </Link>
          </S.ButtonContainer>
        </S.LoginWrapper>
      </S.CenteredContainer>
    </Container>
  );
};

export default LoginPage;
