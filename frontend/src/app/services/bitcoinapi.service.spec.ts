import { TestBed } from '@angular/core/testing';

import { BitcoinapiService } from './bitcoinapi.service';

describe('BitcoinapiService', () => {
  let service: BitcoinapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitcoinapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
