import * as S from './HeaderStyles'

const HeaderComponent = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.Logo src="./../logo.svg" alt="Logo" />
      </S.HeaderContent>
      <S.Navigation>
        <S.NavLink href="/">О нас</S.NavLink>
        <S.NavLink href="/about">Профиль</S.NavLink>
      </S.Navigation>
      <S.LoginButton>Войти</S.LoginButton>
      <S.RegisterButton>Регистрация</S.RegisterButton>
    </S.HeaderWrapper>
  );
};

export default HeaderComponent;
