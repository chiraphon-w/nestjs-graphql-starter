import { CreateWriterDto } from './dto/creat-writer.dto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WriterEntityRepository } from './writer.repository';
import { WriterEntity } from './entities/writer.entity';

@Injectable()
export class WriterService {
  constructor(
    @InjectRepository(WriterEntityRepository)
    private writerEntityRepository: WriterEntityRepository,
  ) {}

  async createWriter(createWriterDto: CreateWriterDto): Promise<WriterEntity> {
    return await this.writerEntityRepository.createWriter(createWriterDto);
  }

  async getWriters(): Promise<WriterEntity[]> {
    return await this.writerEntityRepository.find();
  }

}
