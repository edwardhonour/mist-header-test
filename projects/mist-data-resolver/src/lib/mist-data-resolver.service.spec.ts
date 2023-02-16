import { TestBed } from '@angular/core/testing';

import { MistDataResolverService } from './mist-data-resolver.service';

describe('MistDataResolverService', () => {
  let service: MistDataResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistDataResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
