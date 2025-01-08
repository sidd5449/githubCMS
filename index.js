import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from "multer";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";
import getPostRouter from './routers/getPost.js'
import createPostRouter from './routers/createPost.js'
import deletePostRouter from './routers/deletePost.js'
import updatePostRouter from './routers/updatePost.js'
import createUserRouter from './routers/createUser.js'

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/createpost', upload.single('file'), createPostRouter)
app.use('/updatepost', updatePostRouter)
app.use('/deletepost', deletePostRouter)
app.use('/createuser', createUserRouter)
app.use('/getpost', getPostRouter);
// app.use('/getToken', getTokenRouter)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
  })
  .catch((err) => console.log(err.message));
