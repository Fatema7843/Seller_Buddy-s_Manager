import { Test, TestingModule } from '@nestjs/testing';
import { MainManagerController } from './main_manager.controller';

describe('MainManagerController', () => {
  let controller: MainManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainManagerController],
    }).compile();

    controller = module.get<MainManagerController>(MainManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
