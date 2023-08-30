import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
import{IsEmail}from 'class-validator';

@Entity("volunteer")
    export class VolunteerEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;
    @Column()
    email:string;
    }
