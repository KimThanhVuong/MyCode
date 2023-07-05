import { TestBed } from '@angular/core/testing';

import { OderWomanService } from './oder-woman.service';

describe('OderWomanService', () => {
  let service: OderWomanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OderWomanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
