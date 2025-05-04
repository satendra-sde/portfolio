import { TestBed } from '@angular/core/testing';

import { SSetStorageService } from './s-set-storage..service';

describe('SSetStorageService', () => {
  let service: SSetStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSetStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
