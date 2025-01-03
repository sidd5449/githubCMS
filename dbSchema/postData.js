import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  id: {
    type: Number,
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
});

const postData = mongoose.model("postData", postSchema);

export default postData;