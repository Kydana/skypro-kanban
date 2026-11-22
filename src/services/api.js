import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';

// Получить все задачи
export async function fetchTasks({ token }) {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка при загрузке задач', {
      cause: error,
    });
  }
}

// Добавить новую задачу
export async function postTask({ token, task }) {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка при создании задачи', {
      cause: error,
    });
  }
}

// Редактировать задачу
export async function editTask({ token, id, task }) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': '',
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка при редактировании задачи', {
      cause: error,
    });
  }
}

// Удалить задачу
export async function deleteTask({ token, id }) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Ошибка при удалении задачи', {
      cause: error,
    });
  }
}
