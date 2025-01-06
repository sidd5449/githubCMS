import { Octokit } from "octokit";

export const getFile = async (owner, repoName, token, filename) => {
    const client = new Octokit({
        auth: token,
    });
    const postFile = await client.request(`GET /repos/${owner}/${repoName}/${filename}`, {
        owner: owner,
        repo: repoName,
    })
    return(postFile);
}