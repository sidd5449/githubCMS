import axios from "axios";
// import base64 from 'base-64';

export const deleteFile = async (author, repo, token, filename) => {
    const owner = author;
    const path = filename;
    const clearData = async () => {
        try {
            await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
    
            console.log('File deleted successfully:');
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    };
    await clearData();
    
}