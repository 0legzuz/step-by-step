const apiUrl = "https://3e37-217-107-127-252.ngrok-free.app";

const currentTokenType = "Bearer";

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
}, 140000);

const getCards = async () => {
  try {
    const response = await fetch(`${apiUrl}/cards/?skip=0&limit=10`, {
      method: "GET",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);

      return responseData;
    } else {
      console.log("Навернулось");
      return false;
    }
  } catch (error) {
    console.error("Навернулось:", error);
    return false;
  }
};
async function uploadImage(file, accessToken, tokenType) {
  try {
    const formData = new FormData();
    formData.append("file_image", file, file.name);

    const response = await fetch(`${apiUrl}/images/load`, {
      method: "POST",
      body: formData,
      headers: {
        "ngrok-skip-browser-warning": "69420",
        "authorization-": `${tokenType} ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.id);

      return data.id;
    } else {
      throw new Error("Image upload failed.");
    }
  } catch (error) {
    throw new Error(`Error uploading image: ${error.message}`);
  }
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

async function createCard(cardData, accessToken, tokenType) {
  try {
    const response = await fetch(`${apiUrl}/cards/new`, {
      method: "POST",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
        "authorization-": `${tokenType} ${accessToken}`,
        "Content-Type": "application/json", 
      }),
      body: JSON.stringify(cardData),
    });

    console.log("Заголовок авторизации:", `${tokenType} ${accessToken}`);

    if (response.ok) {
      console.log("Карта успешно создана!");
    } else {
      const errorMessage = await response.text(); // или response.json(), если ошибка возвращается в формате JSON
      throw new Error(`Ошибка создания карты. Ответ сервера: ${errorMessage}`);
    }
  } catch (error) {
    throw new Error(`Ошибка при создании карты: ${error.message}`);
  }
}

export {
  confirmRegistration,
  registerUser,
  loginUser,
  updateToken,
  getCards,
  uploadImage,
  createCard,
};
