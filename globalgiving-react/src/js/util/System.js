const DEV = process.env.REACT_APP_DEV;

export const HOME_URL = DEV ? 'http://localhost:3000' : process.env.REACT_APP_HOME_URL;
export const SERVER_URL = DEV ? 'http://localhost:3300' : process.env.REACT_APP_SERVER_URL;