import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entities/posts.entity';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class FindAllPosts {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  async findAll() {
    const posts = await this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user')
      .select(['post.id','post.title', 'post.body', 'user.username'])
      .getMany();
    return posts;
  }
}
