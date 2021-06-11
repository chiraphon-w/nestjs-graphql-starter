import {
  Resolver,
  Mutation,
  Args,
  Query,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { WriterEntity } from './entities/writer.entity';
import { WriterService } from './writer.service';
import { CreateWriterDto } from './dto/creat-writer.dto';
@Resolver((of) => WriterEntity)
export class WriterResolver {
  constructor(@Inject(WriterService) private writerService: WriterService) {}

  @Mutation((returns) => WriterEntity)
  async createWriter(
    @Args('createWriterDto') createWriterDto: CreateWriterDto,
  ): Promise<WriterEntity> {
    return await this.writerService.createWriter(createWriterDto);
  }

  @Query((returns) => [WriterEntity])
  async getWriters(): Promise<WriterEntity[]> {
    return await this.writerService.getWriters();
  }


}
