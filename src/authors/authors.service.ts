import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  create(createAuthorInput: CreateAuthorInput) {
    return 'This action adds a new author';
  }

  findAll(): Author[] {
    return [
      { id: 1, name: 'Author 1' },
      { id: 2, name: 'Author 2' },
      { id: 3, name: 'Author 3' },
    ]
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
