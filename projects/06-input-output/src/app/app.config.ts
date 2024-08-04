/**
 * Defines an 'ApplicationConfig' object in Angular,
 * which is used to configure various aspects of an Angular application.
 */

/**
 * imports the 'ApplicationConfig' type from Angular's core library.
 * 'ApplicationConfig' is an interface that defines the configuration options for an Angular application.
 */
import { ApplicationConfig } from '@angular/core';

/**
 * 'appConfig' is explicitly set to 'ApplicationConfig', ensuring that the object confirms to the 'ApplicationConfig' interface.
 *
 * 'ApplicationConfig' includes configuration options, like 'providers', 'declarations', 'imports', etc.
 *
 * In the 'providers' array we specify dependency injection Providers.
 * Providers are used to register services and other dependencies.
 */
export const appConfig: ApplicationConfig = {
  providers: [],
};

/**
 * Integrating with Angular Application.
 * 
 * 'appConfig' is integrated with Angular application in the 'main.ts' or 'app.module.ts' file.
 * 
 * ***************************************************

   import { bootstrapApplication } from '@angular/platform-browser';
   import { AppComponent } from './app/app.component';
   import { appConfig } from './app/app.config';

   bootstrapApplication(AppComponent, appConfig)
     .catch(error => console.error(error));



 */
