import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';
import { AuthorsService } from 'src/authors/authors.service';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private authorsService: AuthorsService,
  ) { }

  async findAll(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async findOneById(id: number): Promise<Post> {
    const post = await this.postRepository.findOneBy({ id });
    return post;
  }

  createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post);
    return this.postRepository.save(newPost);
  }

  deleteAllPost(): boolean {
    this.postRepository.clear();
    return true;
  }

  getAuthor(userId: string): Promise<Author> {
    return this.authorsService.findOne(userId);
  }

  async findAllByAuthorId(authorId: string): Promise<Post[]> {
    return this.postRepository.find({
      where: {
        authorId
      }
    })
  }


}
