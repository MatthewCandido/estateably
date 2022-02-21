import HttpException from "./HttpException";
 
class TransactionCategoryNotFoundException extends HttpException {
  constructor(category: string) {
    super(404, `Transaction with category ${category} not found`);
  }
}
 
export default TransactionCategoryNotFoundException;