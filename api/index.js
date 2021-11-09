const express = require('express');
const app = express();

const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

app.use(express.json());
dbConnect();

app.get('/', (req, res) => {
  res.send('api is working');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log('server started...');
});
