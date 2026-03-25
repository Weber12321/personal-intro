import axios from 'axios';

const PROD_API = 'https://selfless-enchantment-production.up.railway.app/api/v1';
const DEV_API = 'http://localhost:8000/api/v1';

const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';

const client = axios.create({
  baseURL: isDev ? DEV_API : PROD_API,
  timeout: 10000,
});

export const fetchProfile = () => client.get('/profile').then(r => r.data);
export const fetchExperiences = () => client.get('/experiences').then(r => r.data);
export const fetchProjects = () => client.get('/projects').then(r => r.data);
export const fetchProject = (id) => client.get(`/projects/${id}`).then(r => r.data);

export default client;
