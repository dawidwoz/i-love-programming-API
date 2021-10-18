import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammersController } from './programmers.controller';

describe('ProgrammersController', () => {
  let controller: ProgrammersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammersController],
    }).compile();

    controller = module.get<ProgrammersController>(ProgrammersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
