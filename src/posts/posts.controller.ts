import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePost } from './use-cases/create-post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { FindAllPosts } from './use-cases/find-all-posts.service';
import { FindPostById } from './use-cases/find-post-by-id.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly createPost: CreatePost,
        private readonly findAllPosts: FindAllPosts,
        private readonly findPostById: FindPostById,
    ) {}

    @Post()
    create(@Body() input: CreatePostDto) {
        return this.createPost.create(input);
    }

    @Get()
    findAll() {
        return this.findAllPosts.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.findPostById.findByid(id);
    }
}
