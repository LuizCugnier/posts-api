import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindUserByUsername {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findByUsername(username: string) {
    try {
      const user = await this.userRepository.findOne({ where: { username } });

      return user;
    } catch (error) {
      throw new Error('Usuario nao encontrado!');
    }
  }
}
