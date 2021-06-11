import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriterEntityRepository } from './writer.repository';
import { WriterResolver } from './writer.resolver';
import { WriterService } from './writer.service';

@Module({
  imports: [TypeOrmModule.forFeature([WriterEntityRepository])],
  providers: [WriterResolver, WriterService]
})
export class WriterModule {}
