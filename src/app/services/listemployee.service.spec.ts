import { TestBed } from '@angular/core/testing';

import { ListemployeeService } from './listemployee.service';

describe('ListemployeeService', () => {
  let service: ListemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
