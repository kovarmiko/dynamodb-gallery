# Sample NodeJS Gallery with CRUD operations

This project intends to show how to build a simple image uploading server with NodeJS, Express.js and other community supplied modules.

## Installation

To start, please clone this repo.

In the `/public` directory create a folder named `uploads`.

Inside `/config` directory, copy `default.config.js` to  `config.js` with:

```sh
$ cp default.config.js config.js
```

In the same directory copy `default.AwsConfig.json` to `AwsConfig.json`:

```sh
$ cp default.AwsConfig.json AwsConfig.json
```

Inside `/public` folder create a folder and name it `uploads`.

Inside `AwsConfig.json` change the `accessKeyId` and `secretAccessKey` property  to your AWS IAM user credentials. This step is needed to establish connection with DynamoDB.

Fetch all dependencies in the root folder of your app by running:
```sh
$ npm install
```
Start the server (in the root):
```sh
$ npm start
```
The process will listen at:
```sh
localhost:8081
```