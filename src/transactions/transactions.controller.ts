import express from 'express';
import Controller from '../interfaces/controller.interface';
import Transaction from './transaction.interface';
import transactionModel from './transactions.model';
import TransactionNotFoundException from '../exceptions/TransactionNotFoundException';
import TransactionCategoryNotFoundException from '../exceptions/TransactionCategoryNotFoundException';
import InternalServerErrorException from '../exceptions/InternalServerErrorException';
import SearchNoResultsException from '../exceptions/SearchNoResultsException';
import validationMiddleware from '../middleware/validation.middleware';
import CreateTransactionDto from './transaction.dto';
import prepareTransactionsForDataTable from '../utils/transformData';

class TransactionsController implements Controller {
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
        this.router.get(`${this.path}/search/:field/:value`, this.getTransactionByField);
        this.router.get(`${this.path}/search/value/:minvalue/:maxvalue`, this.getTransactionByValueRange);
        this.router.patch(`${this.path}/:id`, validationMiddleware(CreateTransactionDto, true), this.modifyTransaction);
        this.router.delete(`${this.path}/:id`, this.deleteATransaction);
        this.router.post(this.path, validationMiddleware(CreateTransactionDto), this.createATransaction);
    }

    private getAllTransactions = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const transactions = await this.transaction.find().exec();
            response.send(transactions);
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }

    private getTransactionById = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const id = request.params.id;
            const transaction = await this.transaction.findById(id).exec();
            if (transaction) {
                response.send(transaction);
            } else {
                next(new TransactionNotFoundException(id));
            }
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }

    private getTransactionByCategory = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const category = request.params.category;
            const transactions = await this.transaction.find({ category: `${category}`}).exec();
            if (transactions && transactions.length) {
                response.send(transactions);
            } else {
                next(new TransactionCategoryNotFoundException(category));
            }
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }

    private getTransactionByField = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const field = request.params.field;
            const value = request.params.value;
            let transactions;
        
            if (field !== "value") {
                transactions = await this.transaction.find({ [field]: { $regex: '^' + `${value}`, $options: 'i' }}).exec();
            } else {
                transactions = await this.transaction.find({ [field]: value}).exec();
            }
            
            if (transactions && transactions.length) {
                response.send(transactions);
            } else {
                next(new SearchNoResultsException());
            }
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }

    private getTransactionByValueRange = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const minValue = request.params.minvalue;
            const maxValue = request.params.maxvalue;
            let transactions;
                   
            transactions = await this.transaction.find({["value"]:{"$gte": `${minValue}`,"$lte": `${maxValue}`}}).exec();
         
            if (transactions && transactions.length) {
                response.send(transactions);
            } else {
                next(new SearchNoResultsException());
            }
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }

    private modifyTransaction = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const id = request.params.id;
            const data: Transaction = request.body;
            const transaction = await this.transaction.findByIdAndUpdate(id, data, { new: true}).exec();
            
            if (transaction) {
                response.send(transaction);
            } else {
                next(new TransactionNotFoundException(id));
            }
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }   

    private createATransaction = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const transactionData: Transaction = request.body;
            const newTransaction = new this.transaction(transactionData);
            newTransaction.save()
                .then( async savedTransaction => {
                    const transactions = await this.transaction.find().exec()
                    response.send(transactions);
                })
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }

    private deleteATransaction = (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const id = request.params.id;
            this.transaction.findByIdAndDelete(id)
                .then( successResponse => {
                    if (successResponse) {
                        response.send(200);
                    } else {
                        next(new TransactionNotFoundException(id));
                    }
                })
        } catch (error: any) {
            next(new InternalServerErrorException(error));
        }
    }
}
 
export default TransactionsController;