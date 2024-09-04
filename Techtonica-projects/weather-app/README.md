# Weather App 
## Overview
Have you ever wanted to check the current weather for any city in the world? Use the Weather App! The Weather App is a easy to use web application that fetches and displays the current weather information such as, temperature, weather description wind speed, etc., for any city. This project was created for Week 7's project for the Techtonica program. The Weather App uses a React front end and a Node.js backend to create an interactive UI.

### Demo
![Weather App Demo](https://github.com/stmcpeters/Techtonica-Assignments/blob/main/Techtonica-projects/weather-app/weather-app.gif)
### Features
- City-Based Weather Search: Users can enter the name of any city to retrieve its current weather data.
- Weather Details Displayed: Includes temperature, weather description, humidity, pressure, and wind speed.
- Weather Icons: Displays weather conditions with corresponding icons.
- Responsive Design: Built with React, ensuring a responsive and user-friendly interface.
### Technologies
- Frontend:
  - React: JavaScript library for building responsive user interfaces.
  - CSS: Styling and layout of the app.
  - Fetch API: Makes HTTP requests to the backend.
- Backend:
  - Express.js: A Node.js framework for setting up the server and handling HTTP requests.
  - Node.js: JavaScript environment used to run the Express server.
  - Body-Parser: Middleware to parse incoming request bodies into human-readable text.
  - Cors: Middleware to handle Cross-Origin Resource Sharing.
  - Dotenv: Hides sensitive environment variables.
  - Fetch (Node.js): Retrieves data from the OpenWeatherMap API.
- API:
  - OpenWeatherMap API: Provides weather data for various cities worldwide.
### Installation
To run the Weather App on your local machine, follow these steps:
#### Prerequisites
Make sure you have the following installed on your machine:
- Node.js (which includes npm): [Download Node.js](https://nodejs.org/en/download/package-manager)
- Git (for cloning the repository): [Download Git](https://git-scm.com/downloads)
1. Clone the repository <br>
   `git clone https://github.com/stmcpeters/Techtonica-Assignments/tree/main/Techtonica-projects/weather-app`
   <br>
   `cd weather-app`
3. Set up the backend
- navigate to `server.js`
- install backend dependencies: `npm install`
3. Create a `.env` file
- Create a .env file in the root of the backend directory and add your environment variables (see also `.env-sample`). <br>
For example: <br>
`WEATHER_API_KEY=your_openweathermap_api_key` <br>
`DB_PORT=8080`
- Remember to import and configure `dotenv` in your `server.js` file to use variables securely. <br>
`import dotenv from 'dotenv';` <br>
`dotenv.config();`
4. Start the server using `npm start`
5. Set up the front end
- navigate to `cd client`
- install dependencies `npm install`
6. Start the React development server using `npm run dev`
7. Sign up/log in to get your own API key from [OpenWeatherAPI](https://openweathermap.org/api)
### API Endpoints
- GET /api
  - Returns a simple greeting message from the server to test connection.
- GET /weather
  - Fetches weather data for a specified city.
  - Query parameter: city (optional, defaults to "San Francisco").
### Stretch Goals
- more organization with file structure => creating separate folders for frontend and backend
### Contributing
For any questions, comments, or contributions, please reach out to me via email or open an issue on the GitHub repository.
### License
This project is licensed under the MIT License.
