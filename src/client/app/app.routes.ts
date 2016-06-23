import { provideRouter, RouterConfig } from '@angular/router';

import { PresentationRoutes } from './+presentation/index';
import { HomeRoutes } from './+accueil/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...PresentationRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
