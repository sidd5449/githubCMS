import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
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
  repoName: {
    type: String,
    required: false,
  },
  githubUserName: {
    type: String,
    required: false,
  },
  password:{
    type:String,
    required: false,
  }
  
});

const userData = mongoose.model("userData", userSchema);

export default userData;