import { TestBed, inject } from '@angular/core/testing';

import { SearchRootService } from './search-root.service';

describe('SearchRootService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRootService]
    });
  });

  it('should be created', inject([SearchRootService], (service: SearchRootService) => {
    expect(service).toBeTruthy();
  }));
});
