import express, { Application } from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'

import initDbConnection from './initDbConnection'


import router from './routes'

const app: Application = express();

async function runServer() {
  try {
    // MongoDB database TypeORM connection
    await initDbConnection();

    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
    app.use(router);

    // Launch the server
    app.listen({ port: process.env.PORT }, () => console.log('\x1b[32m%s\x1b[0m', '✔', `Server is running at http://localhost:${process.env.PORT}`))

    return app
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '✖', 'Failed to start server.');
    console.log(error)
  }
}

if (process.env.NODE_ENV !== 'test') {
  runServer()
}

export default runServer
