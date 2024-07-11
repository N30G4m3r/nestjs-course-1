import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('')
export class HelloController {
  @Get('/')
  index() {
    return 'Home Pague';
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return '404 not found';
  }
}
