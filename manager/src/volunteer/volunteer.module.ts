import { Module } from "@nestjs/common";
import{VolunteerEntity} from "./volunteer.entity";
import{TypeOrmModule} from "@nestjs/typeorm";
import { VolunteerController } from 'src/volunteer/volunteer.controller';
import { VolunteerService } from 'src/volunteer/volunteer.service';
import { MailerModule } from "@nestjs-modules/mailer/dist/mailer.module";
@Module({
//     imports:[TypeOrmModule.forFeature([ManagerEntity])],
//     controllers:[ManagerController],
//     providers:[ManagerService],
// })
imports:[TypeOrmModule.forFeature([VolunteerEntity]),
MailerModule.forRoot({
    transport:{
        host:'smtp.gmail.com',
        port: 465,
        ignoreTLS:true,
        secure:true,
        auth:{
            username:'volunteer@gmail.com',
            password:'ioigkbzjgyzmitom',
        },
    }
})


],

controllers:[VolunteerController],
providers:[VolunteerService],})


export class VolunteerModule {




}
