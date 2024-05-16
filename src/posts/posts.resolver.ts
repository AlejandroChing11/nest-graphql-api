import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { Author } from 'src/authors/entities/author.entity';

@Resolver(() => Post)
export class PostsResolver {

  constructor(
    private readonly postsService: PostsService,
  ) { }

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOneById(id);
  }

  @ResolveField(returns => Author)
  author(@Parent() post: Post): Promise<Author> {
    return this.postsService.getAuthor(post.authorId);
  }

  @Mutation(() => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.createPost(postInput);
  }

  @Mutation(() => Boolean)
  async deleteAllPost(): Promise<boolean> {
    return this.postsService.deleteAllPost();
  }

}
