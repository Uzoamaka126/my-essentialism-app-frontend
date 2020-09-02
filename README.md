# my-essentialism-app-frontend (Work-in-progress)
A web app that helps you keep track of values that you'll like to intentionally cultivate. Think of it as a check list for building the values that you'd like to have.

Built using React with Chakra-UI as main styling library. Other third party libraries include:
* [date-fns](date-fns.org/)

Backend was built with NodeJs + PostgreSQL and is hosted on Heroku.

Deployed Link: [here](https://jolly-pasteur-2fc198.netlify.app/) 

## [Getting Started](#Getting-started)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### [Prerequisites](#Prerequisites)

For development, you will only need Node.js installed on your environment.

```
$ node --version
v10.16.1

$ npm --version
6.9.0
```

### [Installing](#Installing)

```
$ https://github.com/Uzoamaka126/my-essentialism-app-frontend
$ cd my-essentialism-app-frontend
$ npm install
```

### [Starting Development Server](#Starting-development-server)

 ```
 $ npm start
 ```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.<br />

### [Running the tests](#Running-the-tests)

```
$ npm test
```

Launches the test runner in the interactive watch mode.<br />

### [Deployment/Build For Production](#Deployment/Build-For-Production)

```
$ npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### [Linting fix](#Linting-fix)

```
$ npm lint:fix
```

Fixes linting automatically

### [Coverage reporting](#Coverage-reporting)

```
$ npm coverage
```

Reports coverage with disabled test-watching

### [Eject hidden modules](#Eject-hidden-modules)

```
$ npm eject
```

Ejects hidden modules into `package.json`
