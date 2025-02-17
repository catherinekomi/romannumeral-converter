## Roman Numeral Converter

## Extension 1 and 2

A web service and UI that converts numbers (1-3999) to Roman numerals using a Node.js API and a React frontend.

## Getting Started

### Install and Run Backend

```sh
cd backend
npm install
npm start
```

API available at: `http://localhost:8080/romannumeral?query=1987`

### Install and Run Frontend

```sh
cd frontend
npm install
npm start
```

UI available at: `http://localhost:3000`

## Project Structure

```
romannumeral-converter/
│── backend/
│   ├── src/
│   │   ├── converter.js
│   │   ├── server.js
│   ├── tests/
│   │   ├── converter.test.js
│   │   ├── server.test.js
│── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│── README.md
```

## Dependencies

Backend: `express`, `cors`, `vitest`  
Frontend: `react`, `@adobe/react-spectrum`, `react-testing-library`

## Testing

## Docker Setup

## Extension 3

This project includes a **Dockerized backend**.
Docker container ensures the application runs consistently across different environments.

### **Build the Docker Image**

Run the following command inside the `backend/` folder:

```sh
docker build -t roman-numeral-api .

```
