import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindUserByID {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async find(id: number) {
    try {
      const user = await this.userRepository.findOneByOrFail({ id: id });

      return user;
    } catch (error) {
      throw new Error('Usuario nao encontrado!');
    }
  }
}
