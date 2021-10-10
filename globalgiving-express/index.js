// server setup

/* ENV FILE
  DEV=true
  API_KEY=************
  API_EMAIL=**********
  API_PASSWORD=*******
*/


const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const { DEV } = process.env;

const PORT = process.env.PORT || '3300'; 

app.use(cors({ 
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200
}));

// int status, string message, object data
respond = (status, message, data) => { return { status, message, data } };

app.listen(PORT, () => {
  console.log("LISTENING ON PORT", PORT);
  if(DEV) console.log("RUNNING IN DEVELOPMENT");
});

const globalGivingApi = require('./api/globalGivingApi.js');
app.use('/api', globalGivingApi);

app.get('/', (req, res) => {
  res.send('SERVER HOME ROUTE');
})