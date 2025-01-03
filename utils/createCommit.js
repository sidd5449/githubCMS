import { Octokit } from "octokit"


export const createCommit = async (owner, repoName, file, token, filename) => {
    const client = new Octokit({
        auth: token,
    });

    const commits = await client.repos.listCommits({
        owner: owner,
        repo: repoName,
    });
    const CommitSHA = commits.data[0].sha;
    const commitableFile = {
        path: filename,
        mode: '100644',
        type: 'commit',
        content: file
    }
    const {
        data: { sha: currentTreeSHA },
    } = await client.git.createTree({
        owner: owner,
        repo: repo,
        tree: commitableFile,
        base_tree: CommitSHA,
        message: 'Updated programatically with Octokit',
        parents: [CommitSHA],
    });

    const {
        data: { sha: newCommitSHA },
    } = await client.git.createCommit({
        owner: owner,
        repo: repoName,
        tree: currentTreeSHA,
        message: `Updated programatically with Octokit`,
        parents: [latestCommitSHA],
    });

    await client.git.updateRef({
        owner: owner,
        repo: repoName,
        sha: newCommitSHA,
        ref: "heads/main", // Whatever branch you want to push to
    });

}