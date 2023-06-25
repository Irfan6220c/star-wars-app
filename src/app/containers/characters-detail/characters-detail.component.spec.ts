import { CharactersDetailComponent } from './characters-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CharactersService } from '../../services/character.service';
import { storeCharacterService } from '../../services/storeCharacter.service';
import { PageService } from '../../services/page.service';
import { expect } from '@jest/globals';

describe('CharactersDetailComponent', () => {
  let component: CharactersDetailComponent;
  let charactersService: CharactersService;
  let storeService: storeCharacterService;
  let pageService: PageService;
  let router: Router;

  beforeEach(() => {
    const activatedRouteStub = { snapshot: { paramMap: { get: () => '1' } } };
    charactersService = { getCharacter: jest.fn(() => of({ result: { uid: '1' } })) } as any;
    storeService = {
      getCharacterDetails: jest.fn(),
      setCharacterDetails: jest.fn(),
    } as any;
    pageService = { getCurrentPage: jest.fn(), setCurrentUid: jest.fn() } as any;
    router = { navigate: jest.fn() } as any;

    component = new CharactersDetailComponent(activatedRouteStub as any, charactersService, pageService, router, storeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch character details on init', () => {
    const charactersServiceSpy = jest.spyOn(charactersService, 'getCharacter');
    const storeServiceSpy = jest.spyOn(storeService, 'setCharacterDetails');
    component.ngOnInit();
    expect(charactersServiceSpy).toHaveBeenCalledWith(1);
    expect(storeServiceSpy).toHaveBeenCalledWith('1', { result: { uid: '1' } });
    expect(pageService.setCurrentUid).toHaveBeenCalledWith('1');
    expect(component.character).toEqual({ result: { uid: '1' } });
  });

  it('should navigate back when goBack is called', () => {
    const routerSpy = jest.spyOn(router, 'navigate');
    component.goBack();
    expect(routerSpy).toHaveBeenCalledWith([''], { queryParams: { page: pageService.getCurrentPage() } });
  });
});
