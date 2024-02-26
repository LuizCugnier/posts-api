import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUser } from './use-cases/create-user.service';
import { UpdateUserInfo } from './use-cases/update-user.service';
import { FindAllUsers } from './use-cases/find-all-users.service';
import { FindUserByID } from './use-cases/find-by-id.service';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { FindUserByUsername } from './use-cases/find-by-username.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [CreateUser, UpdateUserInfo, FindAllUsers, FindUserByID, FindUserByUsername, AuthService, JwtService],
})
export class UsersModule {}
