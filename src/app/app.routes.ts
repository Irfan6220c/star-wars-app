import { Routes } from '@angular/router';
import { CharactersListComponent } from '../app/@components/characters-list/characters-list.component';
import { CharactersDetailComponent } from '../app/@components/characters-detail/characters-detail.component';
import { PlanetDetailComponent } from './@components/planet-detail/planet-detail.component';
export const routes: Routes = [
  { path: '', component: CharactersListComponent },
  { path: 'character-details/:id', component: CharactersDetailComponent },
  { path: 'planet-detail/:id', component: PlanetDetailComponent },
];
