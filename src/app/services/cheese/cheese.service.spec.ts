import { TestBed } from '@angular/core/testing';

import { CheeseService } from './cheese.service';

describe('CheeseService', () => {
  let service: CheeseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheeseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
