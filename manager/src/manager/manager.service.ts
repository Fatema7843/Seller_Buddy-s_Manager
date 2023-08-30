import { Injectable } from '@nestjs/common';
import{InjectRepository} from '@nestjs/typeorm';
import{Repository} from 'typeorm';
import{ManagerEntity} from 'src/manager/manager.entity';
import { ManagerDto } from 'src/manager/manager.dto';
import { MailerService } from '@nestjs-modules/mailer/dist';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(ManagerEntity)
    private managerRepo:
    Repository<ManagerEntity>,private MailerService:MailerService,){}

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

async findOneByEmail(email:string):Promise<ManagerEntity | undefined> {
    return this.managerRepo.findOne({where: {email }});
  }

    insertManager(mydto:ManagerDto):any{
        return this.managerRepo.save(mydto);
    }

    getmanager(id):any{
        return this.managerRepo.find({where:{id:id}},)
      }


      allmanager(): any {
        return this.managerRepo.find();
      }

      deletemanager(id): any {
        return this.managerRepo.delete(id);
      }

      async updatemanager(id: number, name: string): Promise<string> {
        const result = await this.managerRepo.update(id, { name});
    
        if (result.affected > 0) {
          return 'Successfully!! Manager updated';
        } else {
          return 'Ops!! Manager not found';
        }
      }
      


    
  
}
