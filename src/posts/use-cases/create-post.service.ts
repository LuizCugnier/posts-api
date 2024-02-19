import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { CreatePostDto } from '../dto/create-post.dto';

@Injectable()
export class CreatePost {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  
  create(input: CreatePostDto) {
    try {
      const post = new Post(input);
      return this.postRepository.save(post);
    } catch (error) {
      console.error('Erro ao criar o post', error);
      throw new Error('Post já cadastrado!');
    }
  }
}
