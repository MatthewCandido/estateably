import mongoose from 'mongoose';
import Transaction from './transaction.interface';
 
const transactionSchema = new mongoose.Schema({
    category: String,
    description: String,
    value: Number
});
 
const transactionModel = mongoose.model<Transaction & mongoose.Document>('Transaction', transactionSchema);
 
export default transactionModel;