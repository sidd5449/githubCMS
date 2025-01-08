import userData from '../dbSchema/userData.js';
import postData from '../dbSchema/postData.js'
import { createCommit } from '../utils/createCommit.js';
import { v4 as uuidv4 } from 'uuid';


export const createPostController = async (req, res) => {
    // api inputs:
    // userId, filename, tags 
    // file
    try {
        console.log(req.body)
        const data  = req.body;
        const user = await userData.find({ id: data.userId });
        console.log(user);
        const postFile = req.file;
        const unqId = uuidv4();
        const post = new postData({
            id: unqId,
            postTitle: data.filename,
            tags: 'initial testing posts',
            author: user[0].username,
            repoName: user[0].repoName,
        })
        createCommit(user[0].username, user[0].repoName, postFile, user[0].token, data.filename).then(async() => {
            await post.save();
        })
        
        res.status(200).json({message: "File created"})
    } catch (err) {
        res.status(400).json({ message: err.message })

    }

}

export const createUserController = async (req, res) => {
    try {
        const userDetails = req.body;
        console.log(userDetails)
        const newUser = new userData(userDetails);
        await newUser.save();
        res.status(201).json({ message: 'New User created' })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}
