import { CreateBookDto } from './dto/creat-book.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntityRepository } from './book.repository';
import { BookEntity } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntityRepository)
    private bookEntityRepository: BookEntityRepository,
  ) {}

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    return await this.bookEntityRepository.createBook(createBookDto);
  }

  async getBooks(): Promise<BookEntity[]> {
    return await this.bookEntityRepository.find();
  }

  async getBookById(id: string): Promise<BookEntity> {
    return await this.bookEntityRepository.findOne(id);
  }

  async updateBookById(
    id: string,
    createBookDto: CreateBookDto,
  ): Promise<BookEntity> {
    const { name, description, price } = createBookDto;
    const edit = await this.getBookById(id);
    edit.name = name;
    edit.description = description;
    edit.price = price;
    try {
      return await this.bookEntityRepository.save(edit);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async deleteBookById(id: string): Promise<BookEntity> {
    const found = await this.getBookById(id);
    const result = await this.bookEntityRepository.softDelete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Book with id: ${id} is not found`);
    } else {
      return found;
    }
  }
}
