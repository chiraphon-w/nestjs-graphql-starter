import { CreateBookDto } from './dto/creat-book.dto';
import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
    const { name, description, price, writerId } = createBookDto;
    const book = new BookEntity();
    book.name = name;
    book.description = description;
    book.price = price;
    book.writerId = writerId;

    let res;
    try {
      res = await this.bookEntityRepository.save(createBookDto);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Error, because this name already exist!');
      } else {
        throw new BadRequestException();
      }
    }
    return res;
  }

  async getBooks(): Promise<BookEntity[]> {
    let books = await this.bookEntityRepository.createQueryBuilder('book') //เรียกใช้ table book
    .leftJoinAndSelect('book.writer', 'writer') 
    .select([
      'book',
      'writer.id',
      'writer.name'
    ])
    .orderBy('book.updated_at', 'DESC') //เรียงbook DESC = มากไปหน่อย ASC น้อยไปมาก
    .getMany(); // get ค่าทั้งหมด
  return books;
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
