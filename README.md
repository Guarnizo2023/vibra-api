# Getting Started with this vibra-api

This API provides services for Vibra Web

========================================================================

## Technologies

API - NodeJS-Express-NestJS-MongoDB-Mongoose-Swagger

## Other settings in the project

|   <!-- -->   | <!--   -->  |    <!-- -->    |
| :----------: | :---------: | :------------: |
|  _Tsconfig_  | _Prettier_  | _Jsonwebtoken_ |
|   _Eslint_   |    _Ejs_    |     _Cron_     |
|    _Git_     |  _log4js_   |    _moment_    |
| _Pre-commit_ |  _NestJS_   |   _MongoDb_    |
|  _Mongoose_  | _socket-io_ |  _Typescript_  |

## Starting 🚀

_These instructions will allow you to get a copy of the project running on the local machine for development and testing purposes._

See **Deployment** to learn how to deploy the project.

### Pre- requirements 📋

- _NodeJS_ current version v20.13.1
- _MongoDB_ 

##### Recommended 📋

- _MongoDB Compass_
- _Hyper_
- _VsCode_
- _Postman_
- _GitHub Desktop_

### Installation 🔧

**To install the project locally and run the api please execute the following steps**

_Clone the vibra-api repository from github_

```
git clone https://github.com/Guarnizo2023/vibra-api.git
```

_Install the dependencies_

```
npm i
```

_Consume the post method in the data/init path from Swagger or execute the following CURL_

```
curl --location --request POST 'http://localhost:4000/data/init'
```
_Set configuration .env_

```
Set your environment variables in the .env file
```

_Compile the project and start the server_

```
npm run start-env
```

_Invoke the service status endpoint_

```
http://localhost:4000
```

## Swagger 📦

_Invoke the API documentation endpoint_

```
http://localhost:4000/api-docs
```

## Running the tests ⚙️

_Run to start unit tests_

```
npm run test
```

## Deployment 📦

_Compile the project and build the application sources_

```
npm run compile
```

## Built with 🛠️

_Tools and Technologies used_

- [Nodejs](https://nodejs.org/en/) - Server-side JavaScript environment,uses an asynchronous and event-driven model
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework
- [Npm](https://www.npmjs.com/) - Dependency manager
- [MongoDB](https://www.mongodb.com/) - Database engine
- [Mongoose](https://mongoosejs.com/docs/) - Lib Query MongoDB
- [Swagger](https://swagger.io/) -Swagger is an open specification for defining APIs

## Contributing 🖇️

Contributions are currently not allowed.

## Versioned 📌

[SemVer](http://semver.org/) is used for versioning. For all versions available.

## Authors ✒️

_Built by_

- **Ermes Guarnizo Motta** - _Engineer System Teacher UNAD_ - [Guarnizo2023](https://github.com/Guarnizo2023)
- **Yovany Suárez Silva** - _Senior Full Stack Developer_ - [desobsesor](https://github.com/desobsesor)

## License 📄

This project is under the MIT License - see the file [LICENSE.md](LICENSE.md) for details

## Expressions of Gratitude 🎁

⌨️ With ❤️ for the educational community.
