import Transaction from '../transactions/transaction.interface';

function prepareTransactionsForDataTable(transactions: Array<Transaction>) {
    const dataTableTransactions: Array<string[]> = [];
    transactions.forEach(transaction => {
        const category = transaction.category;
        const description = transaction.description;
        const value = transaction.value;
        dataTableTransactions.push([category, description, value.toString()])
    })
    return dataTableTransactions;
}

export default prepareTransactionsForDataTable;