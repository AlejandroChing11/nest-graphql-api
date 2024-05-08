import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {


  findAll(): Post[] {
    return [
      { id: 1, title: 'Post 1', content: 'Content 1' },
      { id: 2, title: 'Post 2' },
      { id: 3, title: 'Post 3' },
    ];
  }

}
