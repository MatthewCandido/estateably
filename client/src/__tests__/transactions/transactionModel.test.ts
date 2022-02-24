import Transaction from '../../transactions/transaction.model';

describe("Transaction Model", () => {
    it("Creates new Transactions", () => {
        const transaction = new Transaction("123","Salary","Test",10);
        expect(transaction._id).toBe("123");
        expect(transaction.category).toBe("Salary");
        expect(transaction.description).toBe("Test");
        expect(transaction.value).toBe(10);
    }) 
})