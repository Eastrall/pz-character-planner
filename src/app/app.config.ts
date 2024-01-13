import { APP_INITIALIZER, ApplicationConfig, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ThemeService } from './services';

export function initializeApplication(themeService: ThemeService) {
  return () => {
    themeService.initialize();
  }
}

function provideApplicationInitialization(): Provider {
  return {
    provide: APP_INITIALIZER,
    useFactory: initializeApplication,
    multi: true,
    deps: [ThemeService]
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideApplicationInitialization(),
  ]
};
