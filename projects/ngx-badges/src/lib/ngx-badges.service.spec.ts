import { TestBed } from '@angular/core/testing';

import { NgxBadgesService } from './ngx-badges.service';

describe('NgxBadgesService', () => {
  let service: NgxBadgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBadgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
