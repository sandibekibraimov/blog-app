const express = require('express');
const multer = require('multer');
const app = express();

const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');

app.use(express.json());
dbConnect();

app.get('/', (req, res) => {
  res.send('api is working');
});

const storage = multer.diskStorage({
  destination: (req, file, callBackFn) => {
    callBackFn(null, 'assets');
  },
  filename: (req, file, callBackFn) => {
    callBackFn(null, 'image.png');
  },
});

const upload = multer({ storage });

app.use('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json({ msg: 'File has been uploaded' });
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log('server started...');
});
