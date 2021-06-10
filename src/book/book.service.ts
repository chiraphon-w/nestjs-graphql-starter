import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntityRepository } from './book.repository';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntityRepository)
    private bookEntityRepository: BookEntityRepository,
  ) {}

  async findOne(id: string): Promise<BookEntity> {
    return await this.bookEntityRepository.findOne(id);
  }
}
