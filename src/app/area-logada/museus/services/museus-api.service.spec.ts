/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MuseusApiService } from './museus-api.service';

describe('Service: MuseusApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuseusApiService]
    });
  });

  it('should ...', inject([MuseusApiService], (service: MuseusApiService) => {
    expect(service).toBeTruthy();
  }));
});
