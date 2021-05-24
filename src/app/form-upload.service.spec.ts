import { TestBed } from '@angular/core/testing';

import { FormUploadService } from './form-upload.service';

describe('FormUploadService', () => {
  let service: FormUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
