GitMark CMS - A Github based Content Management System to store rich text data in markdown format.
--------------------------------------------------------------------------------------------------

GitMark CMS is a robust and user-friendly content management system that leverages the power of GitHub repositories to store and manage rich text data in Markdown format. Designed with developers and content creators in mind, this CMS offers a seamless integration with GitHub, allowing users to take full advantage of version control, collaboration, and deployment features provided by the platform.

**Key Features:**

*   **Markdown Support**: Effortlessly create, edit, and manage content using Markdown, a lightweight markup language that is easy to learn and widely supported.
    
*   **GitHub Integration**: Directly sync your content with GitHub repositories, enabling version control, collaborative editing, and easy access to your content from anywhere.
    
*   **Version Control**: Keep track of changes and revisions with GitHub's powerful version control system, ensuring that you always have access to previous versions of your content.
    
*   **Collaborative Editing**: Work together with your team in real-time, leveraging GitHub's collaborative tools to streamline the content creation process.
    
*   **Deployment Ready**: Seamlessly deploy your content to static site generators or other platforms, making it easy to publish and share your work with the world.

## Run locally

**Clone the project**
```
git clone https://github.com/sidd5449/githubCMS.git
```

**Install necessary dependencies**
```
npm install
```

**Create a .env file and enter values for PORT and MONGO_URI variables**
```
PORT = YOUR PORT VALUE
MONGO_URI = "YOUR MONGO DB CONNECTION STRING"
```

**Run server using nodemon**
```
nodemon index.js
```

## API Endpoints

| **Endpoint** | **Description** |
| ------------ | --------------- |
| /auth | Authenticates user. Pass username and password in the body. |
| /createpost | Creates a markdown file for post in user's github repository. Pass file, filename, userId and tags in the request body. |
| /updatepost | Updates an already existing post. Pass fileId, userId, and filename in the request body. |
| /deletepost | Deletes the post from Github Repo. Pass fileId in request params |
| /getPost | Get a specific post. Pass post id in request params. |
| /getAllPosts | Get all the posts by a specific user. Pass author name in request body. |
| /createuser | Creates a new user in database. Pass token, username, pwd, repoName, githubUserName, password. |

