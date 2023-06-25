import { Injectable } from '@angular/core';
import { CharacterPage } from '../models/character.model';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class storeCharacterService {
  private charactersCache = new Map<number, CharacterPage>();
  private characterDetailsCache = new Map<string, Character>();
  private planetDetailsCache = new Map<string, any>();

  constructor() {}

  setCharacters(page: number, data: CharacterPage) {
    this.charactersCache.set(page, data);
  }

  getCharacters(page: number): CharacterPage | undefined {
    return this.charactersCache.get(page);
  }

  setCharacterDetails(id: string, data: Character) {
    this.characterDetailsCache.set(id, data);
  }

  getCharacterDetails(id: string): Character | undefined {
    return this.characterDetailsCache.get(id);
  }

  setPlanetDetails(id: string, data: any) {
    this.planetDetailsCache.set(id, data);
  }

  getPlanetDetails(id: string): any | undefined {
    return this.planetDetailsCache.get(id);
  }
}
