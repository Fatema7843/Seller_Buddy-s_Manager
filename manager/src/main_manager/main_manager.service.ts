import { Injectable } from '@nestjs/common';
import{InjectRepository} from '@nestjs/typeorm';
import{Repository} from 'typeorm';
import{Main_ManagerEntity} from 'src/main_manager/main_manager.entity';
import { Main_ManagerDto } from 'src/main_manager/main_manager.dto';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Injectable()
export class Main_ManagerService {
  constructor(
    @InjectRepository(Main_ManagerEntity)
    private main_managerRepo:
    Repository<Main_ManagerEntity>,private MailerService:MailerService,){}

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

async findOneByEmail(email:string):Promise<Main_ManagerEntity | undefined> {
    return this.main_managerRepo.findOne({where: {email }});
  }


    getmain_manager(id):any{
        return this.main_managerRepo.find({where:{id:id}},)
      }


      async updatemain_manager(id: number, name: string): Promise<string> {
        const result = await this.main_managerRepo.update(id, { name});
    
        if (result.affected > 0) {
          return 'Successfully!!  updated profile';
        } else {
          return 'Hey here you are the only Main manager';
        }
      }

      allmain_manager(): any {
        return this.main_managerRepo.find();
      }
      


    
  
}
