# my-essentialism-app-frontend

You can find the deployed project at: (work-in-progress)

A writing publishing platform (cms) that allows readers to emoji react to text blocks and text highlights

### [Key Features](#Key-Features)

- users can view a list of values
- users can select from the list of displayed values above
- users can create projects based on the values selected
- users can check projects as completed or not and have them immediately moved to a completed page

## [Tech Stack](#Tech-Stack)

[Front end built using:](#Front-end-built-using)

- *React/Redux*
- *Styled Components* 
- React-Bootstrap

[Front end deployed to `Netlify`](#Front-end-deployed-to-Netlify) 

# [APIs](#APIs)

- I used an api that I created and hosted on Heroku

# [Environment Variables](#Environment-variables)

For the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
DATABASE_URL = postgres url from elephantsql
```

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
