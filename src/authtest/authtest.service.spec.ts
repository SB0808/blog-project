import { Test, TestingModule } from '@nestjs/testing';
import { AuthtestService } from './authtest.service';

describe('AuthtestService', () => {
  let service: AuthtestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthtestService],
    }).compile();

    service = module.get<AuthtestService>(AuthtestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
