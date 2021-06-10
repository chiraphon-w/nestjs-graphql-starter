import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
@Resolver(of => BookEntity)
export class BookResolver {
  constructor(
    @Inject(BookService) private bookService: BookService,
  ) { }
  
  @Query(returns => BookEntity)
   getBooks(@Args('id') id: string){
    return this.bookService.findOne(id);
  }
  
  // @Query(returns => [BookEntity])
  // async customers(): Promise<BookEntity[]> {
  //   return await this.bookService.findAll();
  // }
  // @Query(() => String)
  // sayHello(): string {
  //   return 'Hello World!';
  // }
}
