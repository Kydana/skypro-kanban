import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/user';

// Авторизация пользователя
export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      { login, password },
      {
        headers: {
          'Content-Type': '',
        },
      }
    );
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка при входе в систему', {
      cause: error,
    });
  }
}

// Регистрация нового пользователя
export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          'Content-Type': '',
        },
      }
    );
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка при регистрации', {
      cause: error,
    });
  }
}
