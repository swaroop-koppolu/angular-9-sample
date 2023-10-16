import { TestBed } from '@angular/core/testing';

import { TestHarnessService } from './test-harness.service';

describe('TestHarnessService', () => {
  let service: TestHarnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestHarnessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
