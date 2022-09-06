# The Wall App - Backend

### Frontend Repo
- [Wall Frontend](https://github.com/gabriellukke/wall-app-frontend)

### Deploys
- [Frontend - Surge](https://wall-app-tsl.surge.sh/)
- [Backend - Heroku](https://rest-wall-api.herokuapp.com/)

## About

In this REST API, users can create a new account, sign in or enter as a visitor. Users can create a post on a wall if they are logged, or just read the posts, if they aren't.
This API was built using [NodeJs](https://nodejs.org/en/), [ExpressJs](https://expressjs.com/), [MySQL](https://www.mysql.com/) and [Sequelize](https://sequelize.org/).

## Installation

To run this application, open the terminal in any directory of your choice and run the commands below:

1. Clone the project
```bash
git clone git@github.com:gabriellukke/wall-app-backend.git
```

2. Enter in project directory
```bash
cd wall-app-backend
```

3. Install project dependencies
```bash
npm install
```
or
```bash
yarn install
```

## Environment Variables

1. To run this API properly you need to set this properties in a `.env` file at project root directory:
```env
DB_USER=[Your database username]
DB_PASSWORD=[Your database password]
DB_NAME=[Your database name, ex: wall, wall_test ]
DB_HOSTNAME=[Host used by MySQL]
NODE_ENV=[The environment you wanna use: development || test || production]
JWT_SECRET=[Secret used to hash the user passoword]
NODEMAILER_EMAIL=[Email used by nodemailer]
NODEMAILER_PASSWORD=[Email password used by nodemailer]
PORT=[The port at localhost you wanna use]
```

## Running It

Once you've installed the dependencies and set the environment variables correctly you can follow the commands in your terminal:

```bash
npm start
```
or
```bash
yarn start
```

## Tests
This project uses Mocha, Chai, Sinon and SuperTest for testing.

- The unit tests are isolated from the database in this project, so you can run without database connection.

Running tests on terminal:
```bash
npm run test:unit
```
or
```bash
yarn run test:unit
```

Running integration tests:
```bash
npm test
```
or
```bash
yarn test
```

## Contacts
* [Gabriel Almeida](mailto:gabriel.dev.almeida@outlook.com)
* [LinkedIn](https://www.linkedin.com/in/gabriel-dev-almeida/)

## Thank you TSL
- I really liked to code this app.
