import { BookEntity } from './entities/book.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(BookEntity)
export class BookEntityRepository extends Repository<BookEntity> {}
