const DEV = process.env.REACT_APP_DEV;
const HOME = process.env.REACT_APP_HOME;
const SERVER = process.env.REACT_APP_SERVER;

export const HOME_URL = DEV ? 'http://localhost:3000' : HOME;
export const SERVER_URL = DEV ? 'http://localhost:3300' : SERVER;