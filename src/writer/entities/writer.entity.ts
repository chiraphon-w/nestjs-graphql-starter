import { BookEntity } from './../../book/entities/book.entity';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Unique,
  DeleteDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'writer' })
@Unique(['name'])
export class WriterEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field((type) => String)
  @Column({ nullable: true })
  name: string;

  @Field()
  @Column()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at!: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at!: Date;

  @Field()
  @DeleteDateColumn({ type: 'timestamptz' })
  deleted_at?: Date;

  @OneToMany(
    () => BookEntity,
    (bookEntity) => bookEntity.writer,
  )
  book: BookEntity[];

}
