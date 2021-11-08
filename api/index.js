const express = require('express');
const app = express();
const dbConnect = require('./config/dbConnect');

app.use(express.json());
dbConnect();

app.get('/', (req, res) => {
  res.send('api is working');
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log('server started...');
});
