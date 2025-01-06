import postData from '../dbSchema/postData.js';
import userData from '../dbSchema/userData.js';
import { deleteFile } from '../utils/deleteFile.js';

export const deletePostController = async (req, res) => {
    try {
        const fileId = req.params;
        const post = await postData.find({ id: fileId });
        const user = await userData.find({ username: post.author })
        deleteFile(post.author, post.repoName, user.token, post.postTitle);
        postData.delete({id: fileId});
        res.status(200).json({ message: 'Deleted post from the repo' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}