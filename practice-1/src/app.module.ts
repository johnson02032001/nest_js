import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TestController } from './controller/test.controller';
import { TestService } from './service/test.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TestController],
  providers: [TestService],
})
export class AppModule {}
