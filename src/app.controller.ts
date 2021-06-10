import { Controller, Get } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
