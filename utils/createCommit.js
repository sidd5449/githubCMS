import axios from "axios";
import fs from 'fs';
import base64 from 'base-64';

export const createCommit = async (author, repo, file, token, filename) => {
    const owner = author;
    const path = filename;
    const message = 'Initial commit message';
    const fetchedFile = fs.readFileSync(file.path).toString();
    const content = base64.encode(fetchedFile);
    console.log(owner)
    console.log(token)
    
    const createFile = async () => {
        try {
            const response = await axios.put(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
                message,
                content
            }, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
    
            console.log('File created successfully:', response.data);
        } catch (error) {
            console.error('Error creating file:', error);
        }
    };
    
    createFile();
    
}