// use node-fetch library to mimic client side fetching service
const fetch = require('node-fetch');

const post = async (endpoint, data) => {
  try {
    const response = await fetch(endpoint, {
      method: 'post',
      Accept: 'application/json',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch(error) {
    console.log("Error making post request to", endpoint);
    console.log(error);
    return null;
  }
}

const get = async (endpoint, query) => {
  try {
    const queryArgs = query ? '?' + new URLSearchParams(query) : '';
    const response = await fetch(endpoint + queryArgs, { 
      method: 'get',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });
    return await response.json();
  } catch(error) {
    console.log("Error making post request to", endpoint);
    console.log(error);
    return null;
  }
}

module.exports = { post, get };
