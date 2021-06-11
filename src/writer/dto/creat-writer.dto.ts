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
export class CreateWriterDto {
  @Field((type) => String)
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Matches(/^[ก-๏a-zA-Z]+$/, {
    message: 'name must be a-z, A-Z or Thai language Only',
  })
  name: string;
}
