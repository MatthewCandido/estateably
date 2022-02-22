import { observable, action } from "mobx";
import api from "../utils/api"
import Transaction from "./transaction.model";

class TransactionViewModel {
    @observable transactions: Array<Transaction> = [new Transaction("","",0)];

    constructor() {
        this.load();
    }

    @action
    public filter = () => {
        
    }
    
    @action
    public load = async () => {
        const transactions: Array<Transaction> = await (await api.get("/transactions")).data;
        this.transactions = transactions;
        console.log(transactions);
    }
}

export default TransactionViewModel;