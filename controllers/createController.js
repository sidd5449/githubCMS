import userData from '../dbSchema/userData.js';
import { Octokit } from 'octokit';
import { createCommit } from '../utils/createCommit.js';


export const createPostController = async (req, res) => {
    // api inputs:
    // userId, filename, tags 
    // file
    try {
        const { data } = req.body;
        const postData = req.file;
        const user = await userData.find({ id: data.userId });
        createCommit(user.username, user.repoName, postData, user.token, data.filename)
    } catch (err) {
        res.status(400).json({ message: err.message })

    }

}

export const createUserController = async (req, res) => {
    try {
        const userDetails = req.body;
        const newUser = new userData(userDetails);
        await newUser.save();
        res.status(201).json({ message: 'New User created' })
    } catch (err) {
        res.status(400).json({ message: "User not created due to internal server error, try reviewing the request body" })
    }
}
