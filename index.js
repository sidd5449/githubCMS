import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import getPostRouter from './routers/getPost.js'
import createPostRouter from './routers/createPost.js'
import deletePostRouter from './routers/deletePost.js'
import updatePostRouter from './routers/updatePost.js'

dotenv.config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8080;
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/getpost', getPostRouter)
app.use('/createpost', createPostRouter)
app.use('/updatepost', updatePostRouter)
app.use('/deletepost', deletePostRouter)
app.use('/getToken', getTokenRouter)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER STARTED AT ${PORT}`));
  })
  .catch((err) => console.log(err.message));
