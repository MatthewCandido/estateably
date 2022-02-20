import TransactionType from './transactionType.interface';

interface Transaction {
    type: TransactionType,
    description: string,
    value: number
}

export default Transaction;