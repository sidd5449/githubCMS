import axios from "axios";
import base64 from 'base-64';

export const getFile = async (author, repo, token, filename) => {
    const owner = author;
    const path = filename;
        // const message = 'Initial commit message';
    // const fetchedFile = fs.readFileSync(file.path).toString();
    // const content = base64.encode(fetchedFile);
    // console.log(owner)
    // console.log(token)
    var post = "";
    
    const getData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
    
            console.log('File fetched successfully:', response.data);
            post = response.data.content.toString();
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    };
    await getData();
    return (base64.decode(post));
    
}