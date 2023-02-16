import { TestBed } from '@angular/core/testing';

import { MistPageFooterService } from './mist-page-footer.service';

describe('MistPageFooterService', () => {
  let service: MistPageFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistPageFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
