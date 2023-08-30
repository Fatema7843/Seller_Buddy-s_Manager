import { IsNotEmpty,Length,IsEmail } from "class-validator";
export class VolunteerDto{
    @IsNotEmpty()
    name:string;
    @IsEmail()
    email:string;
    

}