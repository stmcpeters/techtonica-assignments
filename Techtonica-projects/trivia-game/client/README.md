# Reel Trivia 
## Overview
If you're a fan of trivia, you'll love Reel Trivia! Reel Trivia is a quick and easy to play trivia game that fetches and displays 5 trivia questions of medium difficulty from [Open Trivia Database](https://opentdb.com/api_config.php). This project was created for Week 8's project for the Techtonica program. Reel Trivia uses a React front end and a Node.js backend to create an interactive, responsive UI.

### Demo

### Features
- Fun, yet challenging trivia questions fetched straight from [Open Trivia Database](https://opentdb.com/api_config.php)
- Real time feedback so you know right away if your answers are correct
- Built with React, ensuring a responsive and user-friendly interface
### Technologies
- Frontend:
  - React: JavaScript library for building responsive user interfaces.
  - CSS: Styling and layout of the app.
  - Fetch API: Makes HTTP requests to the backend.
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- Backend:
  - Express.js: A Node.js framework for setting up the server and handling HTTP requests.
  - Node.js: JavaScript environment used to run the Express server.
  - Body-Parser: Middleware to parse incoming request bodies into human-readable text.
  - Cors: Middleware to handle Cross-Origin Resource Sharing.
  - Fetch (Node.js): Retrieves data from the Open Trivia Database API.
- API:
  - [Open Trivia Database API](https://opentdb.com/api_config.php): Provides trivia questions and answers.
### Installation
To run Reel Trivia on your local machine, follow these steps:
#### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (which includes npm): [Download Node.js](https://nodejs.org/en/download/package-manager)
- Git (for cloning the repository): [Download Git](https://git-scm.com/downloads)
1. Clone the repository <br>
   `git clone https://github.com/stmcpeters/Techtonica-Assignments/tree/main/Techtonica-projects/trivia-game`
   <br>
   `cd trivia-game`
2. Set up the backend
- navigate to `server.js`
- install backend dependencies: `npm install`
3. Start the server using `npm start`
4. Set up the front end
- navigate to `cd client`
- install dependencies `npm install`
5. Start the React development server using `npm run dev`
5. Generate your own API URL from [Open Trivia Database](https://opentdb.com/api_config.php)
### API Endpoints
- GET /trivia
  - Returns a response object containing trivia questions, answers, and other important details
- GET /api/data
  - Includes route to hard coded data from Open Trivia Database for testing purposes
### Stretch Goals
- more organization with file structure => creating separate folders for frontend and backend
- ability for front and back end servers to run concurrently
- decoding for special characters in API response
- ability to change difficulty levels and/or number of questions provided
### Contributing
For any questions, comments, or contributions, please reach out to me via email or open an issue on the GitHub repository.
### License
This project is licensed under the MIT License.

