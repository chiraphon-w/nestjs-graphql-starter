import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/creat-book.dto';
@Resolver((of) => BookEntity)
export class BookResolver {
  constructor(@Inject(BookService) private bookService: BookService) {}

  @Mutation((returns) => BookEntity)
  async createBook(
    @Args('createBookDto') createBookDto: CreateBookDto,
  ): Promise<BookEntity> {
    return await this.bookService.createBook(createBookDto);
  }

  @Query((returns) => [BookEntity])
  async getBooks(): Promise<BookEntity[]> {
    return await this.bookService.getBooks();
  }

  @Query((returns) => BookEntity)
  getBookById(@Args('id') id: string) {
    return this.bookService.getBookById(id);
  }

  @Mutation((returns) => BookEntity)
  async updateBookById(
    @Args('id') id: string,
    @Args('createBookDto') createBookDto: CreateBookDto,
  ): Promise<BookEntity> {
    return await this.bookService.updateBookById(id, createBookDto);
  }

  @Mutation((returns) => BookEntity)
  async deleteBookById(@Args('id') id: string): Promise<BookEntity> {
    return await this.bookService.deleteBookById(id);
  }
}
