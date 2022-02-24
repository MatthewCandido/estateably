import HttpException from "./HttpException";
 
class SearchNoResultsException extends HttpException {
  constructor() {
    super(404, `No results were found.`);
  }
}
 
export default SearchNoResultsException;