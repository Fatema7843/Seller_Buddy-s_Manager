import { Module } from "@nestjs/common";
import{ManagerEntity} from "./manager.entity";
import{TypeOrmModule} from "@nestjs/typeorm";
import { ManagerController } from 'src/manager/manager.controller';
import { ManagerService } from 'src/manager/manager.service';
import { MailerModule } from "@nestjs-modules/mailer/dist/mailer.module";
@Module({
//     imports:[TypeOrmModule.forFeature([ManagerEntity])],
//     controllers:[ManagerController],
//     providers:[ManagerService],
// })
imports:[TypeOrmModule.forFeature([ManagerEntity]),
MailerModule.forRoot({
    transport:{
        host:'smtp.gmail.com',
        port: 465,
        ignoreTLS:true,
        secure:true,
        auth:{
            username:'manager1@gmail.com',
            password:'ioigkbzjgyzmitom',
        },
    }
})


],

controllers:[ManagerController],
providers:[ManagerService],})


export class ManagerModule {




}
