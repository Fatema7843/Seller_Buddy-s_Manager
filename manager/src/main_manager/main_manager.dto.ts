import { IsNotEmpty,Length,IsEmail } from "class-validator";
export class Main_ManagerDto{
    @IsNotEmpty()
    name:string;
    @IsEmail()
    email:string;
}