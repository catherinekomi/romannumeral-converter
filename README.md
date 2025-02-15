
## Roman Numeral Converter 

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

