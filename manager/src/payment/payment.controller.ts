import{Body,ParseIntPipe,Get, Controller, Session,Post, Put,Delete,Req,UseGuards,HttpException,HttpStatus,Param,ValidationPipe,UsePipes} from "@nestjs/common";
import {PaymentDto} from 'src/payment/payment.dto';
import { PaymentService } from 'src/payment/payment.service';
import { PaymentEntity } from "./payment.entity";       


@Controller('/payment')
export class PaymentController {

constructor(private paymentservice: PaymentService){}
@Post('/insertpayment')
@UsePipes(new ValidationPipe())
insertPayment(@Body()paymentdto:PaymentDto):any{
    return this.paymentservice.insertPayment(paymentdto);
}

@Get('/allpayment')
	allpayment():any
	{
      return this.paymentservice.allpayment();
	}


@Get('/getPayment/:id')
getPayment(@Param('id',ParseIntPipe)id:number):any
{
    return this.paymentservice.getpayment(id);
}

@Delete('/deletepayment/:id')
	deletepayment(@Param('id',ParseIntPipe)id:number):any
	{
      return this.paymentservice.deletepayment(id);
	}

@Put('/updatepayment/:id')
	updatepayment(@Param('id',ParseIntPipe)
		id:number,@Body('name') name:string):any
	{
      return this.paymentservice.updatepayment(id,name);
	}







}
