# Space Gazer

### Installing

1. Clone this repo using `git clone`.
2. Move to the appropriate directory.
3. Run `npm -i` or `yarn` in order to install dependencies.<br />

## Development

1. Run `git push heroku master`
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




## Mixins
```
@include breakpoint(sm) {
    margin-top: 100px;
  }
@include breakpoint(480px) {
   display: none;
}
 @include breakpoint($min: 640px, $max: 2000px) {
      display: none;
}
```
