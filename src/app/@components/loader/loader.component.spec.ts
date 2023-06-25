import { LoadingService } from 'src/app/services/loading.service';
import { LoaderComponent } from './loader.component';
import { expect } from '@jest/globals';
import { of } from 'rxjs';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let loadingService: LoadingService;

  beforeEach(() => {
    loadingService = {
      loading$: of(false),
    } as LoadingService;
    component = new LoaderComponent(loadingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
