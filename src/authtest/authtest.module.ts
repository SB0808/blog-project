import { Module } from '@nestjs/common';
import { AuthtestController } from './authtest.controller';
import { AuthtestService } from './authtest.service';

@Module({
  controllers: [AuthtestController],
  providers: [AuthtestService]
})
export class AuthtestModule {}
