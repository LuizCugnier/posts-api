import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CreateUser {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  create(createUserDto: CreateUserDto) {
    try {
      const user = new User(createUserDto);
      return this.userRepository.save(user);
    } catch (error) {
      console.error('Erro ao criar usuario', error);
      throw new Error('Usuario já cadastrado!');
    }
  }
}
