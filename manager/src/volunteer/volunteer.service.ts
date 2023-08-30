import { Injectable } from '@nestjs/common';
import{InjectRepository} from '@nestjs/typeorm';
import{Repository} from 'typeorm';
import{VolunteerEntity} from 'src/volunteer/volunteer.entity';
import { VolunteerDto } from 'src/volunteer/volunteer.dto';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Injectable()
export class VolunteerService {
  constructor(
    @InjectRepository(VolunteerEntity)
    private volunteerRepo:
    Repository<VolunteerEntity>,private MailerService:MailerService,){}

async sendEmail(to:string,subject:string,text:string){
    try{
        await this.MailerService.sendMail({
            to,
            subject,
            text,
        });
    }
    catch(error){
        throw new Error ('Found problem');
    }
}

async findOneByEmail(email:string):Promise<VolunteerEntity | undefined> {
    return this.volunteerRepo.findOne({where: {email }});
  }

    insertVolunteer(mydto:VolunteerDto):any{
        return this.volunteerRepo.save(mydto);
    }

    getvolunteer(id):any{
        return this.volunteerRepo.find({where:{id:id}},)
      }


      allvolunteer(): any {
        return this.volunteerRepo.find();
      }

      deletevolunteer(id): any {
        return this.volunteerRepo.delete(id);
      }

      async updatevolunteer(id: number, name: string): Promise<string> {
        const result = await this.volunteerRepo.update(id, { name});
    
        if (result.affected > 0) {
          return 'Successfully!! Volunteeer updated';
        } else {
          return 'Ops!! Volunteer not found';
        }
      }
      


    
  
}
