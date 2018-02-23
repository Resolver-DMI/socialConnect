import { TestBed, inject } from '@angular/core/testing';

import { SearchAccoService } from './search-acco.service';

describe('SearchAccoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAccoService]
    });
  });

  it('should be created', inject([SearchAccoService], (service: SearchAccoService) => {
    expect(service).toBeTruthy();
  }));
});
