import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entities/posts.entity';

@Injectable()
export class FindPostById {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  async findByid(id: number) {
    try {
      const post = await this.postRepository.findOneByOrFail({ id: id });

      return post;
    } catch (error) {
      console.error('Post nao encontrado', error);
        throw new Error('Post nao encontrado!');
    }
  }
}
