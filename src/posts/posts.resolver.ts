import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver()
export class PostsResolver {

  constructor(
    private readonly postsService: PostsService,
  ) { }

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput);
  }

}
