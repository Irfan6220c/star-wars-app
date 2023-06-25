import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CharactersService } from 'src/app/services/character.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { storeCharacterService } from '../../services/storeCharacter.service';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'app-planet-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, FlexLayoutModule, MatIconModule, MatButtonModule, MatDividerModule ],
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent {
  planet: any = null;
  characterId: string | null = null;
  page: number;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private storeCharacterService: storeCharacterService,
    private pageService: PageService,
  ) {
    this.characterId = this.pageService.getCurrentUid();
   }


   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const cachedPlanet = this.storeCharacterService.getPlanetDetails(id);
      if (cachedPlanet) {
        this.planet = cachedPlanet;
      } else {
        this.charactersService.getPlanet(id).subscribe((planet) => {
          this.planet = planet;
          this.storeCharacterService.setPlanetDetails(id, planet);
        });
      }
    }
  }
}
