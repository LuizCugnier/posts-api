import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUser {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {

      const user = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10)
      }

      const createdUser = await this.userRepository.save(new User(user));

      return {...createdUser, password: undefined};

    } catch (error) {
      console.error('Erro ao criar usuario', error);
      throw new Error('Usuario já cadastrado!');
    }
  }
}
