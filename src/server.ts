import App from './app';
import TransactionsController from './transactions/transactions.controller';
 
const app = new App(
  [
    new TransactionsController(),
  ],
  5000,
);
 
app.listen();