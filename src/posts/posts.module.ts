import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entities/posts.entity';
import { CreatePost } from './use-cases/create-post.service';
import { FindAllPosts } from './use-cases/find-all-posts.service';
import { FindPostById } from './use-cases/find-post-by-id.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  controllers: [PostsController],
  providers: [CreatePost, FindAllPosts, FindPostById],
})
export class PostsModule {}
