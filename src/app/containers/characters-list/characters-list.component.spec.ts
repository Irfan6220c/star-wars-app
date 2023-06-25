import { CharactersListComponent } from './characters-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { CharactersService } from '../../services/character.service';
import { storeCharacterService } from '../../services/storeCharacter.service';
import { PageService } from '../../services/page.service';
import { ChangeDetectorRef } from '@angular/core';
import { expect } from '@jest/globals';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let charactersService: CharactersService;
  let storeService: storeCharacterService;
  let pageService: PageService;
  let router: Router;
  let changeDetectorRef: ChangeDetectorRef;

  beforeEach(() => {
    const activatedRouteStub = { queryParams: of({ page: '1' }) };
    charactersService = { getCharacters: jest.fn(() => of({ results: [] })) } as any;
    storeService = {
      getCharacters: jest.fn(),
      setCharacters: jest.fn(),
    } as any;
    pageService = { getCurrentPage: jest.fn(), setCurrentPage: jest.fn() } as any;
    router = { navigate: jest.fn() } as any;

    component = new CharactersListComponent(charactersService, router, pageService, activatedRouteStub as any, changeDetectorRef, storeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters when calling loadCharacters method', () => {
    const charactersServiceSpy = jest.spyOn(charactersService, 'getCharacters');
    const storeServiceSpy = jest.spyOn(storeService, 'setCharacters');
    component.loadCharacters(1);
    expect(pageService.setCurrentPage).toHaveBeenCalledWith(1);
    expect(charactersServiceSpy).toHaveBeenCalledWith(1);
    expect(storeServiceSpy).toHaveBeenCalledWith(1, { results: [] });
    expect(component.charactersPage).toEqual({ results: [] });
  });
});
