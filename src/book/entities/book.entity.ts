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
@Entity()
@Unique(['name'])
export class BookEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

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
}
