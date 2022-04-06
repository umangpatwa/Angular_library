import { TestBed } from '@angular/core/testing';

import { NgxLiveDemoService } from './ngx-live-demo.service';

describe('NgxLiveDemoService', () => {
  let service: NgxLiveDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLiveDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
