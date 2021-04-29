import { TestBed } from '@angular/core/testing';

import { MessagePassingService } from './message-passing.service';

describe('MessagePassingService', () => {
  let service: MessagePassingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagePassingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
