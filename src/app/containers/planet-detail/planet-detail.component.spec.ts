import { PlanetDetailComponent } from './planet-detail.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CharactersService } from '../../services/character.service';
import { storeCharacterService } from '../../services/storeCharacter.service';
import { PageService } from '../../services/page.service';
import { expect } from '@jest/globals';

describe('PlanetDetailComponent', () => {
  let component: PlanetDetailComponent;
  let charactersService: CharactersService;
  let storeService: storeCharacterService;

  beforeEach(() => {
    const activatedRouteStub = { snapshot: { paramMap: { get: () => '1' } } };
    charactersService = { getPlanet: jest.fn(() => of({ name: 'Tatooine' })) } as any;
    storeService = {
      getPlanetDetails: jest.fn(),
      setPlanetDetails: jest.fn(),
    } as any;
    const pageServiceStub = { getCurrentUid: jest.fn() } as unknown as PageService;

    component = new PlanetDetailComponent(activatedRouteStub as any, charactersService, storeService, pageServiceStub);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch planet details on init', () => {
    const charactersServiceSpy = jest.spyOn(charactersService, 'getPlanet');
    const storeServiceSpy = jest.spyOn(storeService, 'setPlanetDetails');
    component.ngOnInit();
    expect(charactersServiceSpy).toHaveBeenCalledWith('1');
    expect(storeServiceSpy).toHaveBeenCalledWith('1', { name: 'Tatooine' });
    expect(component.planet).toEqual({ name: 'Tatooine' });
  });

  it('should use cached planet details if available', () => {
    jest.spyOn(storeService, 'getPlanetDetails').mockReturnValueOnce({ name: 'Tatooine' });
    const charactersServiceSpy = jest.spyOn(charactersService, 'getPlanet');
    component.ngOnInit();
    expect(charactersServiceSpy).not.toHaveBeenCalled();
    expect(component.planet).toEqual({ name: 'Tatooine' });
  });
});
