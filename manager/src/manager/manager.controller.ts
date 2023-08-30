import{Body,ParseIntPipe,Get, Controller, Session,Post, Put,Delete,Req,UseGuards,HttpException,HttpStatus,Param,ValidationPipe,UsePipes} from "@nestjs/common";
import {ManagerDto} from 'src/manager/manager.dto';
import { ManagerService } from 'src/manager/manager.service';
import { MailerService } from "@nestjs-modules/mailer";
import { ManagerEntity } from "./manager.entity";       


@Controller('/manager')
export class ManagerController {

constructor(private managerservice: ManagerService){}
@Post('/insertmanager')
@UsePipes(new ValidationPipe())
insertManager(@Body()managerdto:ManagerDto):any{
    return this.managerservice.insertManager(managerdto);
}

@Get('/allmanager')
	allmanager():any
	{
      return this.managerservice.allmanager();
	}


@Get('/getManager/:id')
//@UseGuards(SessionGuard)
getManager(@Param('id',ParseIntPipe)id:number):any
{
    return this.managerservice.getmanager(id);
}

@Delete('/deletemanager/:id')
	deletemanager(@Param('id',ParseIntPipe)id:number):any
	{
      return this.managerservice.deletemanager(id);
	}

@Put('/updatemanager/:id')
	updatemanager(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.managerservice.updatemanager(id,name);
	}

    @Post('/send-email')
    async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
        try {
            await this.managerservice.sendEmail(emailData.to, emailData.subject, emailData.text);
            return { message: 'Email sent successfully!' };
            } catch (error) {
                return { error: 'Failed to send email.' };
                }
               }







}
