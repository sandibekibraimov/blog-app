const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
