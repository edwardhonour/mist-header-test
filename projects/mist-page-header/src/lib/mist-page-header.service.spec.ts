import { TestBed } from '@angular/core/testing';

import { MistPageHeaderService } from './mist-page-header.service';

describe('MistPageHeaderService', () => {
  let service: MistPageHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistPageHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
