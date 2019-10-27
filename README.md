# React JS + Webpack Build Config

![alt text](https://brainhub.eu/static/media/reactjs-brainhub-development.9ea94b0d.png "React!")

This is a basic React JS boilerplate, bootstrapped with a few other features to allow users to get up and going.

It makes use of Babel, to allow us to use ES6/7/Whatever?!

## Features

- **Hot Module Reloading**: HMR Ready - Keep application state while making live changes to your code!
- **SASS**: Get Sassilicious straight out of the box
- **CSS Modules**: Start building with CSS Module straight out of the box!
- **CSS Extraction**: Projects CSS code is extracted into a `.css` file
- **Build Optimizations**: Tree shaking, minification, image optimizations etc
- **Redux State Management**: Make state sane with Redux
- **React Router**: React Router + Redux make using of Brower history for client side routing

## Getting Started

Getting started is simple! The directions below will get you up and running to get hacking in no time!

### Prerequisites

Ensure you to have the latest Node LTS ensured globally on your system, you can download it from [HERE](https://nodejs.org/en/).

### Installing

1. Clone this repo using `git clone`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />

## Development

1. Run `npm start` or `yarn start` to start the development enviroment<br />
2. Go to browser and visit: `localhost:8080`.

This will start up a webpack dev server to allow for local development of your application.

### CLI Scripts
The development enviroment has various commands in the `package.json` which we are able to run via the CLI, which are as follows:

- `start`: Starts the development server on localhost:8080 by default.
- `build`: Builds the application into a bundle and prepare for deployment.

## Deployment
The build script will run several optimizations and preapre a single `.html` file which will link to the static files (`.js` and `.css`) as an application that will be ready to be served via a server.

1. Run `yarn build` or `npm run build`
2 Files will output in the `build` directory

## Transpile Targets

### CSS Vendor Prefix
- Define browser targets in `./browserslistc` file

### JS Tanspilation
- Define browsers in `.babelrc` file