import { Module } from "@nestjs/common";
import{Main_ManagerEntity} from "./main_manager.entity";
import{TypeOrmModule} from "@nestjs/typeorm";
import { Main_ManagerController } from 'src/main_manager/main_manager.controller';
import { Main_ManagerService } from 'src/main_manager/main_manager.service';
import { MailerModule } from "@nestjs-modules/mailer/dist/mailer.module";
@Module({

imports:[TypeOrmModule.forFeature([Main_ManagerEntity]),
MailerModule.forRoot({
    transport:{
        host:'smtp.gmail.com',
        port: 465,
        ignoreTLS:true,
        secure:true,
        auth:{
            username:'mainmanager@gmail.com',
            password:'ioigkbzjgyzmitom',
        },
    }
})


],

controllers:[Main_ManagerController],
providers:[Main_ManagerService],})


export class Main_ManagerModule {




}
