import { TestBed } from '@angular/core/testing';

import { MistInspectorNewsService } from './mist-inspector-news.service';

describe('MistInspectorNewsService', () => {
  let service: MistInspectorNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistInspectorNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
