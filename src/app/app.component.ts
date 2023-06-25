import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './@components/loader/loader.component';
import { PageService } from './services/page.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoaderComponent ],
})
export class AppComponent {
  title = 'star-wars-app';

  constructor(private router: Router, private pageService: PageService) {}

  ngOnInit(): void {
    const page = this.pageService.getCurrentPage();
    this.router.navigate([''], { queryParams: { page: page } });
  }
}
