import {IsNotEmpty,IsString,IsEmail,IsOptional,Length} from 'class-validator'

export class CreateUserDto{
    @IsOptional({message:'nujno fullName'})
    @IsNotEmpty({message:'pustoy fullName'})
    @IsString({message:'stroka fullName'})
    @Length(4,20,{message:'zalupa fullName'})
    fullName:string

    @IsOptional({message:'nujno email'})
    @IsNotEmpty({message:'pustoy email'})
    @IsString({message:'stroka email'})
    @IsEmail({},{message:'ne email'})
    email:string

    @IsOptional({message:'nujno password'})
    @IsNotEmpty({message:'pustoy password'})
    @IsString({message:'stroka password'})
    @Length(4,15,{message:'zalupa password'})
    password:string
}