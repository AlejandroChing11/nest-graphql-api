import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) { }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });
    return post;
  }

  async createPost(post: Post): Promise<Post> {
    const newPost = this.postRepository.create(post);
    await this.postRepository.save(newPost);
    return newPost;
  }

}
