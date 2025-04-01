# Flight Controllers✈️

## Overview👀
**React** + **Node.js** + **MongoDB** web app that collects and stores HIS, ADI, and Altitude data. The frontend display the data in two different ways:<br>
- **Text:** Which show 3 containers with the data.<br>
- **Visual:** Which visually show a compass, a filling bar for the altitude, and a view panel for the ADI.<br>
the variables are also sent to the backend, which saves it in MongoDB

## Features✨
- **Dynamic Altitude Bar:** Shows a gradient from green to red with a white overlay that reveals based on the altitude parameter.
- **Rotating Compass (HSI):** The labels (0, 90, 180, 270) rotate based on the value of the HSI parameter, so that the current heading is always at the top.
- **Color-Changing ADI:** transitions between green (land) and blue (sky) based on the input value, with a 50-50 split at ADI = 0.

## Tech Stack🛠️
- **Frontend:** React with TypeScript
- **Backend:** Node.js
- **DataBase:** MongoDB

## Installation & Usage
### Prerequisites
- Node.js & npm
- MongoDB connection string
- Clone the repository
### First time running the frontend
Create a file named `.env` inside the frontend folder and paste `PORT=http://localhost:8080` there, you can replace the `8080` with any port number
```sh
- cd frontend
- npm install
- npm start
```
### Next time running the frontend
```sh
- cd frontend
- npm start
```
### First time running the backend
Create a file named `.env` inside the backend folder and paste `PORT=8080`, you can replace the `8080` with any port number<br>
Also, paste `MONGO_URI=YOUR_CONNECTION_STRING` there
```sh
- cd backend
- npm install express mongoose cors body-parser dotenv
- node server.js
```
### Next time running the backend
```sh
- cd backend
- node server.js
```

## Contribution🤝
Contributions are welcome! Feel free to submit issues or pull requests.

## License📄
This project is licensed under the MIT License.
