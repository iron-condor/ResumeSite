import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withNoIncrementalHydration } from '@angular/platform-browser';
import { provideHttpClient, withXhr } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(withNoIncrementalHydration()), provideHttpClient(withXhr())]
};

export const linkedInURL = "https://www.linkedin.com/in/chris-loftis/";
export const githubURL = "https://www.github.com/iron-condor"
