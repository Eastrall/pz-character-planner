import { APP_INITIALIZER, ApplicationConfig, EnvironmentProviders, Provider, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { routes } from './app.routes';
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

function getHttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

function provideApplicationTranslations(): EnvironmentProviders {
  return importProvidersFrom([
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: getHttpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ]);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideApplicationInitialization(),
    provideApplicationTranslations()
  ]
};
