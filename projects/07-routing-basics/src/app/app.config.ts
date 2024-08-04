import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// prettier-ignore
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
