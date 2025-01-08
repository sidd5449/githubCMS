import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  postTitle: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: false,
  },
  author: {
    type: String,
    required: false,
  },
  repoName:{
    type: String,
    required: false,
  },
  file:{
    type: Buffer,
    required: false,
  }
});

const postData = mongoose.model("postData", postSchema);

export default postData;