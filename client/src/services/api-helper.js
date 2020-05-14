import axios from "axios";

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://yearn.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl,
});

// ========================================
// ================ AUTH ==================
// ========================================

export const loginUser = async (loginData) => {
  const resp = await api.post("/auth/login", { auth: loginData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return {
    currentUser: resp.data.user,
    locations: resp.data.locations,
    tasks: resp.data.tasks,
  };
};

export const registerUser = async (registerData) => {
  const resp = await api.post("/users", { user: registerData });
  localStorage.setItem("authToken", resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return {
    currentUser: resp.data.user,
    locations: resp.data.locations,
    tasks: resp.data.tasks,
  };
};

export const verifyUser = async () => {
  const token = localStorage.getItem("authToken");
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get("/auth/verify");
    return {
      currentUser: resp.data.user,
      locations: resp.data.locations,
      tasks: resp.data.tasks,
    };
  }
  return null;
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};

// ========================================
// ================= user =================
// ========================================
//get 1 and create

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};

export const postUser = async (locationData) => {
  const resp = await api.post(`/users/`, locationData);
  return resp.data;
};
// ========================================
// ============== locations ===============
// ========================================
//full crud
export const getAllLocations = async () => {
  const resp = await api.get(`/locations`);
  return resp.data;
};

export const getOneLocation = async (locationId, locationData) => {
  const resp = await api.get(`/locations/${locationId}`, locationData);
  return resp.data;
};
//create location
export const postLocation = async (locationData) => {
  const resp = await api.post(`/locations`, locationData);
  return resp.data;
};
//update location
export const putLocation = async (locationId, locationData) => {
  const resp = await api.put(`/locations/${locationId}`, locationData);
  return resp.data;
};

export const destroyLocation = async (locationId) => {
  const resp = await api.delete(`/locations/${locationId}`);
  return resp;
};

// ========================================
// ================ tasks =================
// ========================================
//show all, create update delete
// export const getAllTasks = async (userId, locationId) => {
//   const resp = await api.get(`/users/${userId}/locations/${locationId}/tasks`);
//   return resp.data;
// };

// export const postTask = async (userId, locationId, locationData) => {
//   const resp = await api.post(
//     `/users/${userId}/locations/${locationId}/tasks`,
//     locationData
//   );
//   return resp.data;
// };

// export const putTask = async (userId, locationId, taskId, locationData) => {
//   const resp = await api.put(
//     `/users/${userId}/locations/${locationId}/tasks/${taskId}`,
//     locationData
//   );
//   return resp.data;
// };

// export const destroyTask = async (userId, locationId, taskId) => {
//   const resp = await api.delete(
//     `/users/${userId}/locations/${locationId}/tasks/${taskId}`
//   );
//   return resp;
// };
