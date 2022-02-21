import HttpException from "./HttpException";
 
class InternalServerErrorException extends HttpException {
  constructor(error: string) {
    super(500, error);
  }
}
 
export default InternalServerErrorException;