import { get } from './HTTPService.js';
import { SERVER_URL } from '../util/System.js'

// only need to authenticate for protected routes, not necessary in this project
export const authenticate = async () => {
  const response = await get(SERVER_URL + '/api/authenticate');
  if(response?.status === 0) {
    return response.data;
  } else {
    return null;
  }
}

// fetch projects with optional {query}
// {query} should contain nextProjectId if new batch of projects are fetched
export const getProjects = async(query) => {
  const response = await get(SERVER_URL + '/api/projects', query);
  if(response?.status === 0) {
    return response.data;
  } else {
    return null;
  }
}