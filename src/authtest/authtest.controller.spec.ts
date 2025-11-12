import { Test, TestingModule } from '@nestjs/testing';
import { AuthtestController } from './authtest.controller';

describe('AuthtestController', () => {
  let controller: AuthtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthtestController],
    }).compile();

    controller = module.get<AuthtestController>(AuthtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
