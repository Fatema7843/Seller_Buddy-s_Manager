import { Injectable } from '@nestjs/common';
import{InjectRepository} from '@nestjs/typeorm';
import{Repository} from 'typeorm';
import{PaymentEntity} from 'src/payment/payment.entity';
import { PaymentDto } from 'src/payment/payment.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepo:
    Repository<PaymentEntity>){}
  

    insertPayment(mydto:PaymentDto):any{
        return this.paymentRepo.save(mydto);
    }

    getpayment(id):any{
        return this.paymentRepo.find({where:{id:id}},)
      }


      allpayment(): any {
        return this.paymentRepo.find();
      }

      deletepayment(id): any {
        return this.paymentRepo.delete(id);
      }

      async updatepayment(id: number, name: string): Promise<string> {
        const result = await this.paymentRepo.update(id, { name});
    
        if (result.affected > 0) {
          return 'Successfully!! Payment updated';
        } else {
          return 'Ops!! Payment not found';
        }
      }
      


    
  
}
