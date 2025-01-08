import userData from "../dbSchema/userData.js";
import { createCommit } from "../utils/createCommit.js";

export const updatePostController = async (req, res) => {
    try {
        console.log(req.body)
        const data  = req.body;
        const user = await userData.find({ id: data.userId });
        console.log(user);
        const postData = req.file;
        createCommit(user[0].username, user[0].repoName, postData, user[0].token, data.filename)
        res.status(204).json("Post Updated Successfully");
    } catch (err) {
        res.status(400).json({ message: err.message })
    }


}