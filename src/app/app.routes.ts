import { Routes } from '@angular/router';
import { CharactersListComponent } from './containers/characters-list/characters-list.component';
import { CharactersDetailComponent } from './containers/characters-detail/characters-detail.component';
import { PlanetDetailComponent } from './containers/planet-detail/planet-detail.component';
export const routes: Routes = [
  { path: '', component: CharactersListComponent },
  { path: 'character-details/:id', component: CharactersDetailComponent },
  { path: 'planet-detail/:id', component: PlanetDetailComponent },
];
