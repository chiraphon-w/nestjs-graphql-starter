import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@ObjectType()
@Entity()
export class BookEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field(type => String)
  @Column({ nullable: true })
  name?: string;

  @Field(type => String, )
  @Column({ nullable: true })
  description?: string;

  @Field(type => Number, )
  @Column({ nullable: true })
  price?: number;
}

