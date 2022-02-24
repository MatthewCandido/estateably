import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import errorMiddleware from './middleware/error.middleware';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger/swagger';
 
class App {
  public app: express.Application;
  public port: number;
 
  constructor(controllers:[any], port:number) {
    this.app = express();
    this.port = port;
    
    this.connectToTheDatabase();
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();

    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    
    this.app.use(function (req, res, next) {

      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', 'true');

      // Pass to next layer of middleware
      next();
    });
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
 
  private initializeControllers(controllers:[any]) {
    controllers.forEach((controller:any) => {
      this.app.use('/api', controller.router);
    });
  }
 
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  private connectToTheDatabase() {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_PATH,
    } = process.env;
    mongoose.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}?retryWrites=true&w=majority`,
        {},
        (err) => {if (err) console.log(err)}
    );
  }
}
 
export default App;