import express from 'express';
import mongoose from 'mongoose';
import router from './router';
import fileUpload from "express-fileupload"
import cors from 'cors';

const app = express();
const DB_URL =
  'mongodb+srv://user:user@cluster0.xz2tq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static('static'));
app.use('/api', router);



async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();