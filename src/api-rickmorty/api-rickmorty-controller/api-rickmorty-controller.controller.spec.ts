import { Test, TestingModule } from '@nestjs/testing';
import { ApiRickmortyControllerController } from './api-rickmorty-controller.controller';

describe('ApiRickmortyControllerController', () => {
  let controller: ApiRickmortyControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiRickmortyControllerController],
    }).compile();

    controller = module.get<ApiRickmortyControllerController>(ApiRickmortyControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
