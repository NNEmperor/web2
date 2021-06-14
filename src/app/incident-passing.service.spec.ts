import { TestBed } from '@angular/core/testing';

import { IncidentPassingService } from './incident-passing.service';

describe('IncidentPassingService', () => {
  let service: IncidentPassingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentPassingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
