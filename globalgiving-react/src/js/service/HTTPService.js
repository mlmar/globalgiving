// post and get methods to be used in other service classes

// string endpoint, object data
export const post = async (endpoint, data) => {
  try {
    const response = await fetch(endpoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch(error) {
    console.error("Error making post request to", endpoint);
    console.error(error);
    return null;
  }
}

// string endpoint, object query (optional)
export const get = async (endpoint, query) => {
  try {
    const queryArgs = query ? "?" + new URLSearchParams(query) : '';
    const response = await fetch(endpoint + queryArgs, { 
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch(error) {
    console.error("Error making get request to", endpoint);
    console.error(error);
    return null;
  }
}