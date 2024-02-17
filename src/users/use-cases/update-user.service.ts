import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UpdateUserInfo {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async update(id: number, input: UpdateUserDto) {
    const user = await this.userRepository.findOneByOrFail({ id: id });

    input.username && (user.username = input.username);
    input.email && (user.email = input.email);
    input.password && (user.password = input.password);

    return this.userRepository.save(user);
  }
}
