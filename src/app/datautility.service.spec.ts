import { TestBed } from '@angular/core/testing';

import { DatautilityService } from './datautility.service';

describe('DatautilityService', () => {
  let service: DatautilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatautilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
