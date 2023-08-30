import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerModule } from './manager/manager.module';
import { VolunteerController } from './volunteer/volunteer.controller';
import { VolunteerModule } from './volunteer/volunteer.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Main_ManagerController } from './main_manager/main_manager.controller';
import { Main_ManagerModule } from './main_manager/main_manager.module';

@Module({
  imports: [ManagerModule, VolunteerModule, PaymentModule, Main_ManagerModule, TypeOrmModule.forRoot({
    type:'postgres',
    host:'localhost',
    port:5434,
    username:'postgres',
    password:'fatema',
    database:'managernew',
    autoLoadEntities:true,
    synchronize:true,
    
    
    
      }), ManagerModule, 
  
  
  
  
  
  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
