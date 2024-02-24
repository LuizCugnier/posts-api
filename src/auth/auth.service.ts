import { Dependencies, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserByID } from 'src/users/use-cases/find-by-id.service';
import { AuthPayloadDto } from './dto/auth-payload.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindUserByUsername } from 'src/users/use-cases/find-by-username.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private findUserByUsername: FindUserByUsername,

  ) {}

  async validateUser({ password, username }: AuthPayloadDto) {
    // console.log('username', username, password);
    const findUser = await this.findUserByUsername.findByUsername(username);
    // console.log('findUser', findUser);

    if (!findUser) throw new HttpException('User not found', 401);

    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return  this.jwtService.sign(user);
    }

    throw new UnauthorizedException('Invalid Credentials');
  }
}
