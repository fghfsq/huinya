import { Injectable,HttpException,HttpStatus,UnauthorizedException} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UsersService } from 'src/users/users.service'
import * as bcrypt from 'bcryptjs'
import { UserEntity } from 'src/users/entity/user.entity'

@Injectable()
export class AuthService {
    constructor(private userService:UsersService,
    private jwt:JwtService){}

    async register(dto:CreateUserDto){
        const candidate = await this.userService.getUserByEmail(dto.email)

        if(candidate){
            throw new HttpException('pizdec',HttpStatus.BAD_REQUEST)
        }

        const hashPassword = await bcrypt.hash(dto.password,5)

        const user = await this.userService.createUser({...dto,password:hashPassword})

        return this.generateToken(user)
    }

    async login(dto:CreateUserDto){ 
        const user = await this.validUser(dto)

        return this.generateToken(user)
    }

    private async generateToken(user:UserEntity){
        return {
            token:this.jwt.sign({
                id:user.id,
                email:user.email
            })
        }
    }

    private async validUser(dto:CreateUserDto){
        const user = await this.userService.getUserByEmail(dto.email)
        
        const validPas = await bcrypt.compare(dto.password,user.password)

        if(user && validPas){
            return user
        }

        throw new UnauthorizedException({message:'huy blyat'})
    }
}
