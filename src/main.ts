
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'
import { routes } from './app/app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ErrorInterceptor } from './app/interceptors/error.interceptor';
import { LoadingInterceptor } from './app/interceptors/loading.interceptor';

  bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(HttpClientModule), provideRouter(routes), provideAnimations(),
      { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ]
  }).catch(err => console.error(err));
