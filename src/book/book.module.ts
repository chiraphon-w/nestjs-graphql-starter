import { BookEntityRepository } from './book.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntityRepository])],
  providers: [BookResolver, BookService]
})
export class BookModule {}
