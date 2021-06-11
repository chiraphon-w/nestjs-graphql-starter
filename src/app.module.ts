import { WriterModule } from './writer/writer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BookModule } from './book/book.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'daytech',
      database: 'nest_gql',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    WriterModule,
    BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
