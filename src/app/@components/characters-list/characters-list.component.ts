import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CharactersService } from '../../services/character.service';
import { CharacterPage } from '../../models/character.model';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';
import { MatPaginator } from '@angular/material/paginator';
import { storeCharacterService } from '../../services/storeCharacter.service';



@Component({
  selector: 'app-characters-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatPaginatorModule, MatToolbarModule],
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit, AfterViewInit {
  charactersPage: CharacterPage | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;


  constructor(private charactersService: CharactersService, public router: Router, private pageService: PageService,  private route: ActivatedRoute, private readonly changeDetectorRef: ChangeDetectorRef,
    private storeCharacterService: storeCharacterService
    ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      const page = params['page'] ? Number(params['page']) : 1;
      this.pageService.setCurrentPage(page);
      this.loadCharacters(page);
     if (this.paginator) {
      this.paginator.pageIndex = page - 1;
    }
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.paginator.pageIndex = this.pageService.getCurrentPage() - 1;
    }
  }

  loadCharacters(page: number): void {
    this.pageService.setCurrentPage(page);
    const cachedCharacters = this.storeCharacterService.getCharacters(page);
    if (cachedCharacters) {
      this.charactersPage = cachedCharacters;
    }
    else {
      this.charactersService.getCharacters(page).subscribe((charactersPage) => {
        this.charactersPage = charactersPage;
        this.storeCharacterService.setCharacters(page, charactersPage);
      });
    }


  }
    navigateToDetails(characterId: string): void {
      this.router.navigate(['/character-details', characterId]);
    }

    ngAfterViewChecked(): void {
      this.changeDetectorRef.detectChanges();
    }
}
