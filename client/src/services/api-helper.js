import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ========================================
// ================= user =================
// ========================================
//get 1 and create

export const getOneUser = async (id) => {
    const resp = await api.get(`/users/${id}`);
    return resp.data;
  }
  
export const postUser = async (locationData) => {
    const resp = await api.post(`/users/`, locationData);
    return resp.data;
  }
// ========================================
// ============== locations ===============
// ========================================
//full crud
export const getAllLocations = async (id) => {
    const resp = await api.get(`/users/${id}/locations`);
    return resp.data;
  }
  
export const getOneLocation = async (userId, locationId) => {
    const resp = await api.get(`/users/${userId}/locations/${locationId}`);
    return resp.data;
  }
  
export const postLocation = async (id, locationData) => {
    const resp = await api.post(`/users/${id}/locations`, locationData);
    return resp.data;
  }
  
export const putLocation = async (userId, locationId, locationData) => {
    const resp = await api.put(`/users/${userId}/locations/${locationId}`, locationData);
    return resp.data;
  }
  
export const destroyFood = async (userId, locationId) => {
    const resp = await api.delete(`/users/${userId}/locations/${locationId}`);
    return resp;
  }
  
// ========================================
// ================ tasks =================
// ========================================
//show all, create update delete
export const getAllTasks = async (userId, locationId) => {
    const resp = await api.get(`/users/${userId}/locations/${locationId}/tasks`);
    return resp.data;
  }
  
export const postTask = async (userId, locationId, locationData) => {
    const resp = await api.post(`/users/${userId}/locations/${locationId}/tasks`, locationData);
    return resp.data;
  }
  
export const putTask = async (userId, locationId, taskId, locationData) => {
    const resp = await api.put(`/users/${userId}/locations/${locationId}/tasks/${taskId}`, locationData);
    // const resp = await api.put(`/users/${id}/locations/${id}/tasks/${id}`, locationData);
    return resp.data;
  }
  
export const destroyTask = async (userId, locationId, taskId,) => {
    const resp = await api.delete(`/users/${userId}/locations/${locationId}/tasks/${taskId}`);
    return resp;
  }
  