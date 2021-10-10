# Find a Charity


## Features
- Utilizes the [GlobalGiving API](https://www.globalgiving.org/api/) to get a simple list and summaries of active charities


## Framework, Libraries and Technologies
- Node express server
- ReactJS -- bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Hosted through Vercel at [findacharity.vercel.app](https://findacharity.vercel.app)



## Installation
- Run `npm install` in both `globalgiving-express` and `globalgiving-react` folders
- Run `npm start` in `globalgiving-express` to start the node server for mongo services
- Run `npm start` in `globalgiving-react` to start the client


## Environment Variables
- Set `DEV` in `globalgiving-express` and `REACT_APP_DEV` in `globalgiving-react` to true to run in development
- Set `API_KEY`in `globalgiving-express` to API key
- Set `API_EMAIL` in `globalgiving-express` to GlobalGiving login email
- Set `API_PASSWORD`in `globalgiving-express` to GlobalGiving login password