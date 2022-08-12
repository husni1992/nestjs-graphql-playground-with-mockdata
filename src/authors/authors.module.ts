import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService, PostsService } from './authors.service';

@Module({
  providers: [AuthorsResolver, AuthorsService, PostsService],
})
export class AuthorModule {}
