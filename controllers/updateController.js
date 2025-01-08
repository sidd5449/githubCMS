import userData from "../dbSchema/userData.js";
import postData from '../dbSchema/postData.js'
import { createCommit } from "../utils/createCommit.js";


// fetched post data

// add selective updated to post metadata
export const updatePostController = async (req, res) => {

    // api inputs:
    // userId, fileId 
    // file
    try {
        console.log(req.body)
        const data  = req.body;
        const user = await userData.find({ id: data.userId });
        console.log(user);
        const postFile = req.file;
        const post = await postData.find({id: data.fileId});
        createCommit(user[0].username, user[0].repoName, postFile, user[0].token, data.filename)
        res.status(204).json("Post Updated Successfully");
    } catch (err) {
        res.status(400).json({ message: err.message })
    }


}