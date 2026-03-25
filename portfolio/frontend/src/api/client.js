import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

const client = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

export const fetchProfile = () => client.get('/profile').then(r => r.data);
export const fetchExperiences = () => client.get('/experiences').then(r => r.data);
export const fetchProjects = () => client.get('/projects').then(r => r.data);
export const fetchProject = (id) => client.get(`/projects/${id}`).then(r => r.data);

export default client;
