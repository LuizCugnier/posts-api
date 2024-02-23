import { Dependencies, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserByID } from 'src/users/use-cases/find-by-id.service';
import { AuthPayloadDto } from './dto/auth-payload.dto';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validateUser({ password, username }: AuthPayloadDto) {
    // console.log('username', username, password);
    const findUser = await this.userRepository.findOne({ where: { username } });
    // console.log('findUser', findUser);

    if (!findUser) return null;

    if (password === findUser.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
