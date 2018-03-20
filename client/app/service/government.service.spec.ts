import { TestBed, inject } from '@angular/core/testing';

import { GovernmentService } from './government.service';

describe('GovernmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GovernmentService]
    });
  });

  it('should be created', inject([GovernmentService], (service: GovernmentService) => {
    expect(service).toBeTruthy();
  }));
});
