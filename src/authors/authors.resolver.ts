import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from './entities/author.entity';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Post } from 'src/posts/entities/post.entity';

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthorsService) { }

  // @Mutation(() => Author)
  // createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
  //   return this.authorsService.create(createAuthorInput);
  // }

  @Query((returns) => [Author], { name: 'authors' })
  findAll() {
    return this.authorsService.findAll();
  }

  @Mutation(() => Author)
  createAuthor(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorsService.createAuthor(createAuthorInput);
  }

  @Query(() => Author, { name: 'author' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.authorsService.findOne(id);
  }

  @ResolveField(returns => [Post])
  posts(@Parent() author: Author): Promise<Post[]> {
    return this.authorsService.getPosts(author.id);
  }

  // @Mutation(() => Author)
  // updateAuthor(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
  //   return this.authorsService.update(updateAuthorInput.id, updateAuthorInput);
  // }

  // @Mutation(() => Author)
  // removeAuthor(@Args('id', { type: () => Int }) id: number) {
  //   return this.authorsService.remove(id);
  // }
}
