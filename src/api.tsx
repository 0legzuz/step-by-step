const apiUrl = "https://3f1d-217-107-124-71.ngrok-free.app";

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

export { confirmRegistration, registerUser, loginUser };