import { TestBed } from '@angular/core/testing';

import { MistDataServiceService } from './mist-data-service.service';

describe('MistDataServiceService', () => {
  let service: MistDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
