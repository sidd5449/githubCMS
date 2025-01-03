import postData from "../dbSchema/postData";
import userData from "../dbSchema/userData";
import { createCommit } from "../utils/createCommit";

export const updatePostController = async (req, res) => {
    try {
        const postId = req.params;
        const postFile = req.file;
        const post = await postData.find({ id: postId })
        const user = await userData.find({ githubUserName: post.author })
        createCommit(post.author, user, repoName, postFile, user.token, post.postTitle);
        res.status(204).json("Post Updated Successfully");
    } catch (err) {
        res.status(400).json({ message: err.message })
    }


}