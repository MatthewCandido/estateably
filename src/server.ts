import App from './app';
import 'dotenv/config';
import validateEnv from './utils/validateEnv';

import TransactionsController from './transactions/transactions.controller';

validateEnv();

const app = new App(
  [
    new TransactionsController(),
  ],
  5000,
);
 
app.listen();