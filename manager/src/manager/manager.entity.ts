import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
import{IsEmail}from 'class-validator';

@Entity("manager")
    export class ManagerEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    }
