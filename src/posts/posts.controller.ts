import { Body, Controller, Post } from '@nestjs/common';
import { CreatePost } from './use-cases/create-post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly createPost: CreatePost
    ) {}

    @Post()
    create(@Body() input: CreatePostDto) {
        return this.createPost.create(input);
    }
}
