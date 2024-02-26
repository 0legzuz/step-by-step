import React, { useState, useEffect } from "react";
import * as S from "./HeaderStyles";
import { Link} from "react-router-dom";

const HeaderComponent: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Проверяем статус регистрации
  const registrationStatus = localStorage.getItem("registrationStatus");

  // Функция для выхода
  const handleLogout = () => {
    // Очищаем localStorage
    localStorage.clear();
    // Перенаправляем пользователя на главную страницу
    window.location.href = "/";
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      if (window.scrollY > 80) {
        timeoutId = setTimeout(() => {
          setIsHeaderVisible(false);
        }, 3000);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <S.HeaderWrapper
      style={{
        transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}>
      <S.HeaderContent>
        <Link to="/">
          <S.Logo src="./../logo.svg" alt="Logo" />
        </Link>
      </S.HeaderContent>

      {registrationStatus === "success" ? (
        <>
          <S.Navigation>
            <S.HeaderNavLink to="/new-card">Создать</S.HeaderNavLink>
            <S.HeaderNavLink to="/">Профиль</S.HeaderNavLink>
          </S.Navigation>
          <S.LogoutButton onClick={handleLogout}>Выйти</S.LogoutButton>
        </>
      ) : (
        <>
          <S.Navigation>
            <S.HeaderNavLink to="/">О нас</S.HeaderNavLink>
            <S.HeaderNavLink to="/">Профиль</S.HeaderNavLink>
          </S.Navigation>

          <Link to="/login">
            <S.LoginButton>Войти</S.LoginButton>
          </Link>
          <Link to="/register">
            <S.RegisterButton>Регистрация</S.RegisterButton>
          </Link>
        </>
      )}
    </S.HeaderWrapper>
  );
};

export default HeaderComponent;
