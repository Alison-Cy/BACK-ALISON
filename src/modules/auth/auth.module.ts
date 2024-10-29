import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[
    JwtModule.register({
      secret: "MI CODIGO SECRETO",
      signOptions:{expiresIn: '60S'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService]
})
export class AuthModule {
  
}
