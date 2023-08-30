import { Module } from "@nestjs/common";
import{PaymentEntity} from "./payment.entity";
import{TypeOrmModule} from "@nestjs/typeorm";
import { PaymentController } from 'src/payment/payment.controller';
import { PaymentService } from 'src/payment/payment.service';

@Module({

imports:[TypeOrmModule.forFeature([PaymentEntity]),


],

controllers:[PaymentController],
providers:[PaymentService],})


export class PaymentModule {




}
