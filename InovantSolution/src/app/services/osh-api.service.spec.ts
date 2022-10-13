import { TestBed } from '@angular/core/testing';

import { OshApiService } from './osh-api.service';

describe('OshApiService', () => {
  let service: OshApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OshApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
