import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3002" 
})
//baseURL: "https://hidden-garden-41243.herokuapp.com"
//baseURL: "http://localhost:3002" 


// ============ AUTH =============
// goes to http://localhost:3000/auth/signup
export const registerUser = async (registerData) => {
  const resp = await api.post('/auth/signup', registerData);
  console.log(resp);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

// goes to http://localhost:3000/auth/login
export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');

  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false;
}

export const allPlants = async () => {
  const resp = await api.get('/plant/all');
  return resp;
}

export const addPlant = async (plantId, userId) => {
  const resp = await api.get(`/plant/add/${userId}/${plantId.id}`)
  console.log(resp)
  return resp;
}

export const getUserPlant = async (userId) => {
  const resp = await api.get(`/plant/profile/${userId}`)
  console.log(resp)
  return resp;
}
