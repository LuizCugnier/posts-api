import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { FindUserByUsername } from 'src/users/use-cases/find-by-username.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.auth';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abc123456',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([User]),
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, FindUserByUsername, LocalStrategy],
})
export class AuthModule {}
