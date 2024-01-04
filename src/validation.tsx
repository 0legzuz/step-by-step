// validations.ts

export const validateEmail = (email: string | null | undefined): boolean => {
  if (!email) {
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export const validateUsername = (
  username: string | null | undefined
): boolean => {
  if (!username) {
    return false;
  }

  const usernameRegex = /[^a-zA-Z0-9_-]/g;
  const isLengthValid = username.length >= 4 && username.length <= 30;
  return !usernameRegex.test(username) && isLengthValid;
};

export const validatePassword = (
  password: string | null | undefined
): boolean => {
  if (!password) {
    return false;
  }

  const passwordRegex = /[^a-zA-Z0-9!@#$%^&*()_+={}[\]|;:'",.<>/?]/g;
  const isLengthValid = password.length >= 8 && password.length <= 100;
  return !passwordRegex.test(password) && isLengthValid;
};


export const validateIdentifier = (input: string | null | undefined): boolean => {
  if (!input) {
    return false;
  }

  // Проверяем, является ли введенное значение допустимым адресом электронной почты
  if (validateEmail(input)) {
    return true;
  }

  // Если не является почтой, проверяем валидность как логина
  return validateUsername(input);
};