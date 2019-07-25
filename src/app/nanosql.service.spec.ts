import { TestBed } from '@angular/core/testing';

import { NanosqlService } from './nanosql.service';

describe('NanosqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NanosqlService = TestBed.get(NanosqlService);
    expect(service).toBeTruthy();
  });
});
