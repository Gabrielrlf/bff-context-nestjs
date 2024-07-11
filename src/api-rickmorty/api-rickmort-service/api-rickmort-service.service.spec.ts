import { Test, TestingModule } from '@nestjs/testing';
import { ApiRickmortServiceService } from './api-rickmort-service.service';

describe('ApiRickmortServiceService', () => {
  let service: ApiRickmortServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiRickmortServiceService],
    }).compile();

    service = module.get<ApiRickmortServiceService>(ApiRickmortServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
