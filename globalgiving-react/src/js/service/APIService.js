import { post, get } from './HTTPService.js';
import { SERVER_URL } from '../util/System.js'

export const authenticate = async () => {
  const response = await get(SERVER_URL + '/api/authenticate');
  console.log(response);
}

export const getProjects = async() => {
  const response = await get(SERVER_URL + '/api/projects');
  console.log(response);
}