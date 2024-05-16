import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { Author } from './entities/author.entity';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
    forwardRef(() => PostsModule)
  ],
  providers: [AuthorsResolver, AuthorsService],
  exports: [AuthorsService]
})
export class AuthorsModule { }
