# Flight Controllers✈️

## Overview👀
This project demonstrates a visual instrument panel built with React and CSS. It features:
- **Altitude Bar:** A gradient background revealed proportionally based on altitude.
- **Heading Indicator (HSI):** A compass-like circle with labels that rotate based on the provided heading value.
- **Attitude Indicator (ADI):** A circle whose color changes instantly based on an input value.

## Features✨
- **Dynamic Altitude Bar:** Shows a gradient from green to red with a white overlay that reveals based on the altitude parameter.
- **Rotating Compass (HSI):** The labels (0, 90, 180, 270) rotate based on the value of the HSI parameter, so that the current heading is always at the top.
- **Color-Changing ADI:** transitions between green (land) and blue (sky) based on the input value, with a 50-50 split at ADI = 0.

## Tech Stack🛠️
- **Frontend:** React with TypeScript
- **Backend:** Node.js
- **DataBase:** MongoDB

## Installation & Usage
### Prerequisties
- Node.js & npm
- MongoDB connection string
- Clone the repository
### First time running the frontend
Create a file named `.env` inside the frontend folder and paste there `PORT=http://localhost:8080`, you can replace the `8080` with any port number
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
Create a file named `.env` inside the backend folder and paste there `PORT=8080`, you can replace the `8080` with any port number<p>
Also paste there `MONGO_URI=YOUR_CONNECTION_STRING`
```sh
- cd backend
- npm install express mongoose cors body-parser dotenv
- node server.js
```
### Next time running the backend
```sh
- node server.js
```

## Contribution🤝
Contributions are welcome! Feel free to submit issues or pull requests.

## License📄
This project is licensed under the MIT License.