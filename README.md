# react-express

A sample application in which ExpressJS is used on back-end and ReactJS on front-end.

## Live demo
Not yet available.

## Getting Started

The project can be easily run on a local system by running the API server and the front-end separately

### Prerequisites

The following softwares are required before starting:
- [Git](https://git-scm.com/)
- [Npm](https://www.npmjs.com/get-npm)

### Installing

A step by step series of examples that tell you have to get a development env running

1. Clone the repo.

```
git clone https://github.com/antomor/react-express.git
```

2. Go into the directory which just cloned the repository in.

```
cd react-express
```

3. Install the back-end dependencies.

```
npm install
```

4. Run the back-end server.

```
npm run server
``` 

4. Move into the front-end directory.
```
cd client
```

5. Install the front-end dependencies.
```
npm install
```

6. Run the front-end app in development-mode 
```
npm start 
```
7. See the application running locally: [127.0.0.1:3000](http://127.0.0.1:3000)

8. The APIs are available locally: [127.0.0.1:3001](http://127.0.0.1:3001)
```

```
9. It is possible to run both API server and client app by using from the root folder, otherwise it will run the client only (it doesn't work on Windows).
```
npm run start
```
## API
For the purpose of the application one single end-point has been implemented
```
/api/duplication/string/<value>?length=<length>
```
It receives two parameters:

- `value` {string}: an alpha-numeric string to be checked for duplicates
- `length` {number}: representing the maximum length of duplicates to be considered 

If no `value` is provided the API returns a `BadRequest` response.

If no `length` is provided the API returns all the possible duplicates.

## Running the tests

The project contains tests for both API and front-end.

### API test
In the root project directory run:
```
npm run test
```

### Front-end app test
In the front-end directory (the client folder under the root project folder).
```
npm run test 
```
The first time, an interactive windows will show the message no tests available since that not snapshots have been create yet. At that time, please press `a` for running all tests.

### End to end tests

For time-reason no ent-to-end tests have been implemented, although for a production project, they are a MUST.

### Tests Notes

No code coverage has been measured on this project due to its purpose. On the contrary, tests on the main parts have been implemented, where main parts represents the API, in charge of performing the calculation, and the front-end.

## Deployment

No live deployment implemented at the moment.

## Built With

* [ExpressJS](http://expressjs.com/) - For the API server
* [ReactJS](https://reactjs.org/) - UI Framework
* [Material-UI](https://material-ui-next.com/) - Google's Material Design implementation
* [ChaiJS](http://chaijs.com/) - Back-end tests
* [Enzyme](https://github.com/airbnb/enzyme) - Front-end tests


## Authors
[Antonio Morrone](https://github.com/antomor)
