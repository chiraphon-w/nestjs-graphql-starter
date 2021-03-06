import { WriterEntity } from './../../writer/entities/writer.entity';
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
  ManyToOne,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'book' })
@Unique(['name'])
export class BookEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column()
  writerId!: string;

  @Field((type) => String)
  @Column({ nullable: true })
  name: string;

  @Field((type) => String)
  @Column({ nullable: true })
  description: string;

  @Field((type) => Number)
  @Column({ nullable: true })
  price: number;

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

  @ManyToOne(
    () => WriterEntity,
    (writerEntity: WriterEntity) => writerEntity.book,
  )
  writer: WriterEntity;
}
