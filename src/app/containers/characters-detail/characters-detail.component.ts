import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Character } from 'src/app/models/character.model';
import { CharactersService } from 'src/app/services/character.service';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { PageService } from 'src/app/services/page.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { storeCharacterService } from '../../services/storeCharacter.service';

@Component({
  selector: 'app-characters-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, DatePipe, RouterModule, MatIconModule, MatDividerModule, MatListModule, MatButtonModule],
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  character: Character;
  page: number

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService,
    private pageService: PageService,
    private router: Router,
    private storeCharacterService: storeCharacterService
  ) {
  }

  ngOnInit(): void {
    this.page = this.pageService.getCurrentPage();
    this.getCharacter();
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const cachedCharacter = this.storeCharacterService.getCharacterDetails(id.toString());
    if (cachedCharacter) {
      this.character = cachedCharacter;
    } else {
      this.charactersService.getCharacter(id)
        .subscribe(character => {
          this.character = character;
          this.storeCharacterService.setCharacterDetails(id.toString(), character);
          this.pageService.setCurrentUid(this.character.result.uid);
        });
    }
  }
  getPlanetId(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1];
  }

  goBack(): void {
    this.router.navigate([''], { queryParams: { page: this.page } });
  }
}
