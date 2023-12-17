import { Controller ,Get, UseGuards} from '@nestjs/common'
import { UsersService } from './users.service'
import { JwtAuthGuard } from 'src/auth/jwt.guard'

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAll(){
        return this.userService.getAll()
    }
}
