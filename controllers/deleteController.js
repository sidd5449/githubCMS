import postData from '../dbSchema/postData.js';
import userData from '../dbSchema/userData.js';
import { deleteFile } from '../utils/deleteFile.js';



// work on this
export const deletePostController = async (req, res) => {
    try {
        const fileId = req.params;
        // console.log(fileId)
        const post = await postData.find({ id: fileId.id });
        // console.log(post)
        const user = await userData.find({ username: post[0].author })
        await deleteFile(post[0].author, post[0].repoName, user[0].token, post[0].postTitle);
        postData.remove({id: fileId.id});
        res.status(200).json({ message: 'Deleted post from the repo' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}