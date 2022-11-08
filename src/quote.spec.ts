import { Test, TestingModule } from '@nestjs/testing';
import { Quote } from './quote';

describe('Quote', () => {
  let provider: Quote;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Quote],
    }).compile();

    provider = module.get<Quote>(Quote);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
