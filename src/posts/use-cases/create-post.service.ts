import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../entities/posts.entity';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class CreatePost {
  constructor(
    @InjectRepository(Posts)
    private readonly postRepository: Repository<Posts>,
  ) {}

  create(input: CreatePostDto) {
    try {
      const post = new Posts(input);
      return this.postRepository.save(post);
    } catch (error) {
      console.error('Erro ao criar o post', error);
      throw new Error('Post já cadastrado!');
    }
  }
}
