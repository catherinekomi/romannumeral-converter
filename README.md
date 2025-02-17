## Roman Numeral Converter

### Extension 1 and 2

A web service and UI that converts numbers (1-3999) to Roman numerals using a Node.js API and a React frontend.
Added few extra functionalities:

- Key press on Enter
- Added IDs to each component to enhance accessibility and using Adobe React Spectrum library.

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
│   ├── tests/
│   │   ├── converter.test.js
│   │   ├── server.test.js
│   │── server.js
│── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── App.test.js
│── README.md
```

## Dependencies

Backend: `express`, `cors`, `vitest`  
Frontend: `react`, `@adobe/react-spectrum`, `react-testing-library`, `@react-spectrum/test-utils`

## Testing

Backend - Use Vitest for unit testing and fetch() for API endpoint validation.
Frontend - Used React Testing Library with Jest and React Spectrum Test Utils to test user interactions, API calls, input updates, and button functionality in the frontend.

## Docker Setup

### Extension 3

This project includes a **Dockerized backend**.
Docker container ensures the application runs consistently across different environments.

### **Build the Docker Image**

Run the following command inside the `backend/` folder:

```sh
docker build -t roman-numeral-api .

```
