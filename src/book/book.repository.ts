import { BookEntity } from './entities/book.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateBookDto } from './dto/creat-book.dto';
import { ConflictException, BadRequestException } from '@nestjs/common';

@EntityRepository(BookEntity)
export class BookEntityRepository extends Repository<BookEntity> {}
