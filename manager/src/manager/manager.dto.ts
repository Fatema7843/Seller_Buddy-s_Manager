import { IsNotEmpty,Length,IsEmail } from "class-validator";
export class ManagerDto{
    @IsNotEmpty()
    name:string;
    @IsEmail()
    email:string;
}