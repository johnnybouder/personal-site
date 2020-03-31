import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CheeseService } from './cheese.service';

describe('CheeseService', () => {
  let service: CheeseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CheeseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
