const express = require('express');
const router = module.exports = express.Router();
const { post, get } = require('../service/HTTPService.js')

const api_key = process.env.API_KEY;
const api_email = process.env.API_EMAIL;
const api_password = process.env.API_PASSWORD;

const URL = 'https://api.globalgiving.org/api/';
const ROUTE_TOKEN = 'userservice/tokens';
const ROUTE_PROJECTS = 'public/projectservice/all/projects/active'

let token = null; // save access token here after authenticating

router.get('/authenticate', async (req, res) => {
  const response = await post(URL + ROUTE_TOKEN, {
    auth_request : {
      api_key,
      user: {
        email: api_email,
        password: api_password
      }
    }
  });

  token = response?.auth_response?.access_token;

  if(token) {
    console.log('Successful authentication');
    res.send(respond(0, 'Successful authentication', null));
  } else {
    console.log('Unsuccessful authentication');
    res.send(respond(1, 'Unuccessful authentication', null));
  }
});

router.get('/projects', async (req, res) => {
  const { nextProjectId } = req.query;
  const query = nextProjectId ? { api_key, nextProjectId } : { api_key };
  const response = await get(URL + ROUTE_PROJECTS, query);

  if(response?.projects) {
    console.log('Successful project retrieval');
    res.send(respond(0, 'Successful project retrieval', response?.projects));
  } else {
    console.log('Unsuccessful project retrieval');
    res.send(respond(1, 'Unsuccessful project retrieval', null));
  }
});

router.get('/', (req, res) => {
  res.send('API HOME ROTUE')
});