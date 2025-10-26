import { Controller, Get } from '@nestjs/common';
import { TestService } from '../service/test.service';

@Controller('api')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('test')
  getTest(): string {
    return this.testService.getTest();
  } 

  @Get('test2')
  getTest2(): string {
    return this.testService.getTest2();
  }
}
