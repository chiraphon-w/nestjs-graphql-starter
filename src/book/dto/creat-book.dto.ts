import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateBookDto {
  @Field((type) => String)
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Matches(/^[ก-๏a-zA-Z]+$/, {
    message: 'name must be a-z, A-Z or Thai language Only',
  })
  name: string;

  @Field((type) => String, { nullable: true })
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field((type) => Number, { nullable: true })
  @IsNotEmpty()
  price: number;
}
