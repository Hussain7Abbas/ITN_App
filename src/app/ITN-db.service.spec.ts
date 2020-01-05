import { TestBed } from '@angular/core/testing';

import { ITNDBService } from './ITN-db.service';

describe('ITNDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ITNDBService = TestBed.get(ITNDBService);
    expect(service).toBeTruthy();
  });
});
