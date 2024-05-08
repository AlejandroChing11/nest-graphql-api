import { Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';

@Resolver()
export class PostsResolver {

  constructor(
    private readonly postsService: PostsService,
  ) { }

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll();
  }

}
