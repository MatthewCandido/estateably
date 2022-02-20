import * as express from 'express';
import Controller from '../interfaces/controller.interface';
import Transaction from './transaction.interface';
import transactionModel from './transactions.model';
 
class PostsController implements Controller {
    public path = '/transactions';
    public router = express.Router();
    private transaction = transactionModel;

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAllTransactions);
        this.router.get(`${this.path}/:id`, this.getTransactionById);
        this.router.get(`${this.path}/category/:category`, this.getTransactionByCategory);
        this.router.patch(`${this.path}/:id`, this.modifyTransaction);
        this.router.delete(`${this.path}/:id`, this.deleteATransaction);
        this.router.post(this.path, this.createATransaction);
    }

    private getAllTransactions = async (request: express.Request, response: express.Response) => {
        const transactions = await this.transaction.find().exec();
        response.send(transactions);
    }

    private getTransactionById = async (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        const transaction = await this.transaction.findById(id).exec();
        response.send(transaction);
    }

    private getTransactionByCategory = async (request: express.Request, response: express.Response) => {
        const category = request.params.category;
        const transactions = await this.transaction.find({ category: `${category}`}).exec();
        response.send(transactions);
    }

    private modifyTransaction = async (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        const data: Transaction = request.body;
        const transaction = await this.transaction.findByIdAndUpdate(id, data, { new: true}).exec();
        response.send(transaction);
    }   

    private createATransaction = async (request: express.Request, response: express.Response) => {
        const transactionData: Transaction = request.body;
        const newTransaction = new this.transaction(transactionData);
        newTransaction.save()
            .then( savedTransaction => {
                response.send(savedTransaction);
            })
    }

    private deleteATransaction = (request: express.Request, response: express.Response) => {
        const id = request.params.id;
        this.transaction.findByIdAndDelete(id)
            .then( successResponse => {
                if (successResponse) {
                    response.send(200);
                } else {
                    response.send(404);
                }
            })
    }
}
 
export default PostsController;