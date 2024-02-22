import { Posts } from 'src/posts/entities/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];

  constructor(props: { username: string; email: string; password: string }) {
    Object.assign(this, props);
  }
}
