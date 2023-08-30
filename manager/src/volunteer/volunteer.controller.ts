import{Body,ParseIntPipe,Get, Controller, Session,Post, Put,Delete,Req,UseGuards,HttpException,HttpStatus,Param,ValidationPipe,UsePipes} from "@nestjs/common";
import {VolunteerDto} from 'src/volunteer/volunteer.dto';
import { VolunteerService } from 'src/volunteer/volunteer.service';
import { MailerService } from "@nestjs-modules/mailer";
import { VolunteerEntity } from "./volunteer.entity";       


@Controller('/volunteer')
export class VolunteerController {

constructor(private volunteerservice: VolunteerService){}
@Post('/insertvolunteer')
@UsePipes(new ValidationPipe())
insertVolunteer(@Body()volunteerdto:VolunteerDto):any{
    return this.volunteerservice.insertVolunteer(volunteerdto);
}

@Get('/allvolunteer')
	allvolunteer():any
	{
      return this.volunteerservice.allvolunteer();
	}


@Get('/getVolunteer/:id')
//@UseGuards(SessionGuard)
getVolunteer(@Param('id',ParseIntPipe)id:number):any
{
    return this.volunteerservice.getvolunteer(id);
}

@Delete('/deletevolunteer/:id')
	deletevolunteer(@Param('id',ParseIntPipe)id:number):any
	{
      return this.volunteerservice.deletevolunteer(id);
	}

@Put('/updatevolunteer/:id')
	updatevolunteer(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.volunteerservice.updatevolunteer(id,name);
	}

    @Post('/send-email')
    async sendEmail(@Body() emailData: { to: string; subject: string; text: string }) {
        try {
            await this.volunteerservice.sendEmail(emailData.to, emailData.subject, emailData.text);
            return { message: 'Email sent successfully!' };
            } catch (error) {
                return { error: 'Failed to send email.' };
                }
               }







}
