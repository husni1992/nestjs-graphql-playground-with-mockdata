import { Resolver } from '@nestjs/graphql';

import MockAuthors from './mock-authors';

export class AuthorsService {
  findOneById(id) {
    return MockAuthors.find((item) => item.id === id);
  }

  findAll() {
    return MockAuthors;
  }
}

export class PostsService {
  findAll(data) {
    return MockAuthors.find((item) => item.id === data.authorId).posts;
  }
}
