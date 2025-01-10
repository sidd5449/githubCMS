import postData from "../dbSchema/postData.js";
import userData from "../dbSchema/userData.js";
import { getFile } from "../utils/getFile.js";

// get posts using pagination
export const getAllPostsController = async(req, res) => {
    let { page, pageSize, author } = req.body;

    try {
    //     page = parseInt(page, 10) || 1;
    // pageSize = parseInt(pageSize, 10) || 50;
    // const posts = await postData.aggregate([
    //     {
    //       $facet: {
    //         metadata: [{ $count: 'totalCount' }],
    //         data: [{ $skip: (page - 1) * pageSize }, { $limit: pageSize }],
    //       },
    //     },
    //   ]);
  
    //   return res.status(200).json({
    //     success: true,
    //     articles: {
    //       metadata: { totalCount: posts[0].metadata[0].totalCount, page, pageSize },
    //       data: posts[0].data,
    //     },
    //   })
      const {author} = req.body;
      const results = await postData.find({author: author})
      res.status(200).json(results);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

// get single post using id
export const getSinglePostController = async(req, res) => {
    try {
        const id = req.params;
        console.log(id);
        const fileInfo = await postData.find({id: id.id});
        const authorInfo = await userData.find({githubUserName: fileInfo[0].author});
        const postFile = await getFile(fileInfo[0].author, authorInfo[0].repoName, authorInfo[0].token, fileInfo[0].postTitle);
        console.log(postFile)
        res.status(200).json(postFile);

    } catch (err) {
        res.status(404).json({message: "Post not found"})
    }
}

// get user info
export const getUserController = async(req, res) => {
    try {
        const id = req.params;
        const user = await userData.find({id: id});
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}