import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import errorMiddleware from './middleware/error.middleware';
 
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
  }
 
  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
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
        () => console.log(" Mongoose is connected")
    );
  }
}
 
export default App;