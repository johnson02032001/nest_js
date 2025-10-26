import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  getTest(): string {
    return 'Hello World';
  }

  getTest2(): string {
    return 'Hello World 2';
  }
}
