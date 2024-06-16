import { TestBed } from '@angular/core/testing';

import { ChatBoxCommunicateService } from './chat-box-communicate.service';

describe('ChatBoxCommunicateService', () => {
  let service: ChatBoxCommunicateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatBoxCommunicateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
