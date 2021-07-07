import { createConnection, Connection } from 'typeorm'

export let connection: Connection;

const initDbConnection = async () => {
  console.log('Connecting to MongoDB database...');

  let retries = (process.env.TYPEORM_CONNECTION_RETRIES || 5) as number;

  while (retries) {
    try {
      if (retries < ((process.env.TYPEORM_CONNECTION_RETRIES || 5) as number)) {
        console.info('\x1b[34m%s\x1b[0m', '\nℹ', 'Retrying connecting to database...')
      }

      connection = await createConnection(process.env.NODE_ENV === 'cloud' ? 'cloud' : 'default');
      console.info('\x1b[32m%s\x1b[0m', '\n✔', 'Successfully connected to MongoDB database.');
      break
    } catch (error) {
      console.error('\x1b[31m%s\x1b[0m', '\n✖', 'Failed to connect to MongoDB database server!');
      console.log(error);
      retries -= 1;
      await new Promise(resolve => setTimeout(resolve, 5000))
    }
  }

  return Boolean(retries)
};

export default initDbConnection
