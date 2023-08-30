import{Body,ParseIntPipe,Get, Controller, Session,Post, Put,Delete,Req,UseGuards,HttpException,HttpStatus,Param,ValidationPipe,UsePipes} from "@nestjs/common";
import {Main_ManagerDto} from 'src/main_manager/main_manager.dto';
import { Main_ManagerService } from 'src/main_manager/main_manager.service';
import { MailerService } from "@nestjs-modules/mailer";
import { Main_ManagerEntity } from "./main_manager.entity";       


@Controller('/main_manager')
export class Main_ManagerController {

constructor(private main_managerservice: Main_ManagerService){}

@Get('/getMain_Manager/:id')
//@UseGuards(SessionGuard)
getMain_Manager(@Param('id',ParseIntPipe)id:number):any
{
    return this.main_managerservice.getmain_manager(id);
}


@Put('/updatemain_manager/:id')
	updatemain_manager(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.main_managerservice.updatemain_manager(id,name);
	}

    @Get('/allmain_manager')
    allmain_manager():any{
        return this.main_managerservice.allmain_manager();
    }

    @Post('/send-email')
    async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
        try {
            await this.main_managerservice.sendEmail(emailData.to, emailData.subject, emailData.text);
            return { message: 'Email sent successfully!' };
            } catch (error) {
                return { error: 'Failed to send email.' };
                }
               }







}
