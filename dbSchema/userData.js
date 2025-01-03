import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: false,
  },
  pwd: {
    type: String,
    required: false,
  },
  repoName: {
    type: String,
    required: false,
  },
  githubUserName: {
    type: String,
    required: false,
  }
  
});

const userData = mongoose.model("userData", userSchema);

export default userData;