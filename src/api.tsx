const apiUrl = "https://272f-81-177-127-254.ngrok-free.app";

const registerUser = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await fetch(`${apiUrl}/users/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      // Если ответ не успешен (код ответа не 2xx), бросаем ошибку
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

const confirmRegistration = async (userId: string) => {
  try {
    const response = await fetch(`${apiUrl}/email/registration/${userId}`, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      localStorage.setItem("token", responseData.access_token);
      return true;
    } else {
      console.log("Уже зарегался");
      return false;
    }
  } catch (error) {
    console.error("Error confirming registration:", error);
    return false;
  }
};

const loginUser = async (identifier: string, password: string) => {
  try {
    const response = await fetch(`${apiUrl}/users/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nick_or_email: identifier,
        password: password,
      }),
    });

    if (response.ok) {
      console.log("Login successful!");
      const responseData = await response.json();
      localStorage.setItem("token", responseData.access_token);
      return responseData;
    } else {
      const errorData = await response.json();
      console.error("Login failed:", errorData);
      return null;
    }
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
};

const updateToken = async (accessToken: string, tokenType: string) => {
  try {
    const response = await fetch(`${apiUrl}/users/token_update/`, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "authorization-": `${tokenType} ${accessToken}`,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      localStorage.setItem("token", responseData.access_token);
      return responseData;
    } else {
      const errorData = await response.json();
      console.error("Ошибка:", errorData);
      return null;
    }
  } catch (error) {
    console.error("Ошибка:", error);
    return null;
  }
};

const currentTokenType = "Bearer";

setInterval(async () => {
  const currentAccessToken = localStorage.getItem("token");
  const registrationStatus = localStorage.getItem("registrationStatus");

  if (registrationStatus === "success" && currentAccessToken) {
    const updatedToken = await updateToken(
      currentAccessToken,
      currentTokenType
    );

    if (updatedToken) {
      console.log("Токен обновлен");
    } else {
      console.log("Токен не обновлен");
    }
  } else {
    console.log("НЕ зареган");
  }
}, 4000);
export { confirmRegistration, registerUser, loginUser, updateToken };
