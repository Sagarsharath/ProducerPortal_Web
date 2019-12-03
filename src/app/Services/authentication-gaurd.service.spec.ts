import { TestBed } from '@angular/core/testing';

import { AuthenticationGaurdService } from './authentication-gaurd.service';

describe('AuthenticationGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationGaurdService = TestBed.get(AuthenticationGaurdService);
    expect(service).toBeTruthy();
  });
});
