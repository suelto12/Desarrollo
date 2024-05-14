import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Type } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
export interface appConfig extends ApplicationConfig {
  imports: Type<any>[];
}
