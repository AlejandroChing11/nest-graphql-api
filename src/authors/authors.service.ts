import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostsService } from '../posts/posts.service';
import { Post } from 'src/posts/entities/post.entity';

@Injectable()
export class AuthorsService {

  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    @Inject(forwardRef(() => PostsService))
    private postsService: PostsService,
  ) { }

  createAuthor(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const newAuthor = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(newAuthor);
  }

  async findAll(): Promise<Author[]> {
    const authors = await this.authorRepository.find();
    return authors;
  }

  findOne(id: string): Promise<Author> {
    return this.authorRepository.findOneBy({ id });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }

  async getPosts(authorId: string): Promise<Post[]> {
    return this.postsService.findAllByAuthorId(authorId);
  }

}
