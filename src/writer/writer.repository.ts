import { WriterEntity } from './entities/writer.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateWriterDto } from './dto/creat-writer.dto';
import { ConflictException, BadRequestException } from '@nestjs/common';

@EntityRepository(WriterEntity)
export class WriterEntityRepository extends Repository<WriterEntity> {
  async createWriter(createWriterDto: CreateWriterDto): Promise<WriterEntity> {
    const { name } = createWriterDto;
    const writer = new WriterEntity();
    writer.name = name;
    let res;
    try {
      res = await this.save(createWriterDto);
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
