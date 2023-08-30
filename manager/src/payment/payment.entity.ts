import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';

@Entity("payment")
    export class PaymentEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

    }
