import { TestBed, inject } from '@angular/core/testing';

import { SaveUserDetailsService } from './save-user-details.service';

describe('SaveUserDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveUserDetailsService]
    });
  });

  it('should be created', inject([SaveUserDetailsService], (service: SaveUserDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
