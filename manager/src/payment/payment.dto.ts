import { IsNotEmpty,Length,IsEmail } from "class-validator";
export class PaymentDto{
    @IsNotEmpty()
    name:string;
    
}