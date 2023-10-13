import { TestBed } from '@angular/core/testing';

import { NetworkCallService } from './network-call.service';

describe('NetworkCallService', () => {
  let service: NetworkCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
