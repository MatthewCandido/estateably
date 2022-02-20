import * as express from 'express';
import Transaction from './transaction.interface';
 
class PostsController {
  public path = '/transactions';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllTransactions);
    this.router.post(this.path, this.createATransaction);
  }
 
  getAllTransactions = (request: express.Request, response: express.Response) => {
    response.send({});
  }
 
  createATransaction = (request: express.Request, response: express.Response) => {
    const post: Transaction = request.body;
    response.send(post);
  }
}
 
export default PostsController;