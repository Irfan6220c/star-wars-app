import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { PageService } from './services/page.service';
import { expect } from '@jest/globals';

describe('AppComponent', () => {
  let component: AppComponent;
  let pageService: PageService;
  let router: Router;

  beforeEach(() => {
    component = new AppComponent(router, pageService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'star-wars-app'`, () => {
    expect(component.title).toEqual('star-wars-app');
  });

});
