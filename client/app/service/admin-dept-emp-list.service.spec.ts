import { TestBed, inject } from '@angular/core/testing';

import { AdminDeptEmpListService } from './admin-dept-emp-list.service';

describe('AdminDeptEmpListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminDeptEmpListService]
    });
  });

  it('should be created', inject([AdminDeptEmpListService], (service: AdminDeptEmpListService) => {
    expect(service).toBeTruthy();
  }));
});
