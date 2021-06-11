import { BookEntity } from './entities/book.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from './dto/creat-book.dto';
import { ConflictException, BadRequestException } from '@nestjs/common';

@EntityRepository(BookEntity)
export class BookEntityRepository extends Repository<BookEntity> {
  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const { name, description, price } = createBookDto;
    const book = new BookEntity();
    book.name = name;
    book.description = description;
    book.price = price;
    let res;
    try {
      res = await this.save(createBookDto);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Error, because this name already exist!');
      } else {
        throw new BadRequestException();
      }
    }
    return res;
  }
}
