import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
import{IsEmail}from 'class-validator';

@Entity("main_manager")
    export class Main_ManagerEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    }
