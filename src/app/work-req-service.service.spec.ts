import { TestBed } from '@angular/core/testing';

import { WorkReqServiceService } from './work-req-service.service';

describe('WorkReqServiceService', () => {
  let service: WorkReqServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkReqServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
