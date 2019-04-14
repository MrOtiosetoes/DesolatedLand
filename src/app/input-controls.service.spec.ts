import { TestBed } from '@angular/core/testing';

import { InputControlsService } from './input-controls.service';

describe('InputControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputControlsService = TestBed.get(InputControlsService);
    expect(service).toBeTruthy();
  });
});
