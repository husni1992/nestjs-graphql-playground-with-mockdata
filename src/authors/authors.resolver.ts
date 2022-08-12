import {
  Resolver,
  Query,
  ResolveField,
  Args,
  Int,
  Parent,
} from '@nestjs/graphql';

import { Author } from './models/author.model';
import { AuthorsService, PostsService } from './authors.service';
import { Post } from './models/post.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @Query((returns) => [Author], { name: 'authors' })
  async getAuthors() {
    return this.authorsService.findAll();
  }

  @ResolveField('posts', (returns) => [String])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }
}
