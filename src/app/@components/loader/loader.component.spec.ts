import { LoadingService } from 'src/app/services/loading.service';
import { LoaderComponent } from './loader.component';
import { expect } from '@jest/globals';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let loadingService: LoadingService

  beforeEach(() => {
    component = new LoaderComponent(loadingService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
