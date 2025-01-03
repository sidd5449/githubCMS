import userData from '../dbSchema/userData.js';
import { Octokit } from 'octokit';


export const createPostController = async(req, res) => {
    // api inputs:
    // userId, filename, createdDate and createdTime, tags 

    const postData = req.file;
    const {data} = req.body;
    const user = await userData.find({id: data.userId});
    const octokit =  new Octokit({
        auth: user.token
    })
    await octokit.request(`POST https://api.github.com/repos/${user.githubUserName}/${user.repoName}/contents/${data.filename}`, {
        owner: user.githubUserName,
        repo: user.repoName
    })


}

export const createUserController = async(req, res) => { 
    try {
        const userDetails = req.body;
        const newUser = new userData(userDetails);
        await newUser.save();
        res.status(201).json({message: 'New User created'})
    } catch (err) {
        res.status(400).json({message: "User not created due to internal server error, try reviewing the request body"})
    }
}
