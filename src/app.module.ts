import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostsModule } from './posts/posts.module';
import { AuthorsModule } from './authors/authors.module';

import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      include: [PostsModule, AuthorsModule],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    PostsModule,
    AuthorsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
