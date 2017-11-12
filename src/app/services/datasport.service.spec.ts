import { TestBed, inject } from '@angular/core/testing';

import { DatasportService } from './datasport.service';

describe('DatasportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasportService]
    });
  });

  it('should be created', inject([DatasportService], (service: DatasportService) => {
    expect(service).toBeTruthy();
  }));
});
