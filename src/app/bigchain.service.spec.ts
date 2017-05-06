import { TestBed, inject } from '@angular/core/testing';

import { BigchainService } from './bigchain.service';

describe('BigchainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BigchainService]
    });
  });

  it('should ...', inject([BigchainService], (service: BigchainService) => {
    expect(service).toBeTruthy();
  }));
});
