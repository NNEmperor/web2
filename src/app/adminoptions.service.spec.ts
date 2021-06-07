import { TestBed } from '@angular/core/testing';

import { AdminoptionsService } from './adminoptions.service';

describe('AdminoptionsService', () => {
  let service: AdminoptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminoptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
