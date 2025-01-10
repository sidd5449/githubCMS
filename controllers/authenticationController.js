import userData from '../dbSchema/userData.js';

export const authenticationController = async(req, res) => {
    try {
        const { userId, password } = req.body;
        const storedInfo = await userData.find({githubUserName: userId});
        if(storedInfo == null){
            res.status(404).json("User not found");
        }
        const pass = storedInfo[0].password;
        if(pass === password){
            res.status(200).json('authenticated');
        }
        else{
            res.status(400).json('user not authenticated');
        }
    } catch (err) {
        res.status(400).json({message: err.message})
    }

}