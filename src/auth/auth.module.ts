import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersModule } from 'src/users/users.module'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule } from "@nestjs/config"

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports:[UsersModule,
  ConfigModule.forRoot(),
  JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{
      expiresIn:'24h'
    }
  })]
})
export class AuthModule {}
