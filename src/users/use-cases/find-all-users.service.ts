import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class FindAllUsers {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    try {
      const users = await this.userRepository.find({ relations: ['posts'] });

      return users;
    } catch (error) {}
  }
}
