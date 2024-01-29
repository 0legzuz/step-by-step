import * as S from "./HeaderStyles";
import { Link } from "react-router-dom";

const HeaderComponent: React.FC = () => {
  // Проверяем статус регистрации
  const registrationStatus = localStorage.getItem("registrationStatus");

  // Функция для выхода
  const handleLogout = () => {
    // Очищаем localStorage
    localStorage.clear();
    // Перенаправляем пользователя на главную страницу
    window.location.href = "/";
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.Logo src="./../logo.svg" alt="Logo" />
      </S.HeaderContent>

      {registrationStatus === "success" ? (
        <>
          <S.Navigation>
            <S.NavLink href="/">О нас</S.NavLink>
          </S.Navigation>
          <S.LogoutButton onClick={handleLogout}>Выйти</S.LogoutButton>
        </>
      ) : (
        <>
          <S.Navigation>
            <S.NavLink href="/">О нас</S.NavLink>
            <S.NavLink href="/">Профиль</S.NavLink>
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
