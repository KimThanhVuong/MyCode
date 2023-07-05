import { TestBed } from '@angular/core/testing';

import { OderDetailsService } from './oder-details.service';

describe('OderDetailsService', () => {
  let service: OderDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OderDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
