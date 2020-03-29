import axios from 'axios';

//const URL = 'https://localhost:3333'
const URL = 'https://beheros.herokuapp.com'

const api = axios.create({
  baseURL: URL
})

export default api;