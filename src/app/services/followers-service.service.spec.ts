import { TestBed } from '@angular/core/testing';

import { FollowersServiceService } from './followers-service.service';

describe('FollowersServiceService', () => {
  let service: FollowersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FollowersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
