const DEV = process.env.REACT_APP_DEV;
const HOME_URL = process.env.REACT_APP_HOME_URL;
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const HOME_URL = DEV ? 'http://localhost:3000' : HOME_URL;
export const SERVER_URL = DEV ? 'http://localhost:3300' : HOME_URL;