import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {

  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) { }

  createAuthor(createAuthorInput: CreateAuthorInput) {
    const newAuthor = this.authorRepository.create(createAuthorInput);
    return this.authorRepository.save(newAuthor);
  }

  async findAll(): Promise<Author[]> {
    const authors = await this.authorRepository.find();
    return authors;
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
