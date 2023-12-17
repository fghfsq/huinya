import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity('users')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    fullName:string

    @Column()
    email:string

    @Column()
    password:string
}