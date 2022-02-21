import { IsString, IsNumber } from 'class-validator';
 
class CreateTransactionDto {
  @IsString()
  public category: string = "";
 
  @IsString()
  public description: string = "";
 
  @IsNumber()
  public value: number = 0;
}
 
export default CreateTransactionDto;