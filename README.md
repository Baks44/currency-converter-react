# Currency Converter React

A modern, responsive currency converter application built with **React**.  

![Currency Converter Screenshot](public/images/screenshot1.png)

## Demo
[View Live Demo on GitHub Pages](https://baks44.github.io/currency-converter-react/)

## Features
- Convert amounts between multiple currencies
- Responsive and user-friendly interface
- Error handling for invalid inputs
- Real-time currency conversion using API

## Technologies & Methodologies

### Frontend
- **React** – functional components and hooks (`useState`, `useEffect`)
- **ES6+** – arrow functions, destructuring, template literals, spread/rest
- **BEM** – maintainable CSS class naming
- **Immutability** – React state updated immutably
- **Fetch API** – fetches exchange rates

### Components
- **App.js** – main component handling layout and state
- **CurrencyInput** – input component for amounts
- **CurrencySelector** – dropdown for currencies
- **ConvertButton** – triggers conversion
- **ResultDisplay** – shows conversion result

## Project Screenshots

### Home Page
![Home Page](public/images/screenshot1.png)

### Conversion Example
![Conversion Example](public/images/screenshot2.png)

## Demo GIF

See the app in action:
![Currency Conversion Demo](public/images/conversion-demo.gif)

## Project Structure
```bash
currency-converter-react/
├─ public/
│  └─ images/           # screenshots and GIFs for README
├─ src/
│  ├─ components/       # reusable React components
│  │  ├─ CurrencyInput.js
│  │  ├─ CurrencySelector.js
│  │  ├─ ConvertButton.js
│  │  └─ ResultDisplay.js
│  ├─ styles/           # CSS styles (BEM methodology)
│  └─ App.js            # main component
└─ package.json


## Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/Baks44/currency-converter-react.git
cd currency-converter-react
npm install
npm start

Usage

Enter an amount to convert

Select source and target currencies

Click Convert

View the result

Deployment

To deploy the project to GitHub Pages:
npm run build
npm run deploy

Best Practices Demonstrated

State Management – immutable React state

Modular Components – reusable and testable UI elements

Modern JavaScript – ES6+ features for clean, readable code

BEM CSS – consistent and scalable styling

GitHub Pages Deployment – continuous deployment workflow


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
