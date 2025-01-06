import { Octokit } from "octokit";

export const deleteFile = async(owner, repoName, token, filename) => {
    const client = new Octokit({
            auth: token,
    });
    await client.request(`DELETE /repos/${owner}/${repoName}/${filename}`, {
        owner: owner,
        repo: repoName,
        title: `Delete post ${filename}`,
        body: "Deleted file",
    })
}