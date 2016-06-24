import { provideRouter, RouterConfig } from '@angular/router';

import { PresentationRoutes } from './+presentation/index';
import { HomeRoutes } from './+accueil/index';
import { ActionsRoutes } from './+actions/index';
import { CauseRoutes } from './+cause/index';
import { ContactRoutes } from './+contact/index';
import { DonRoutes } from './+don/index';
import { EnfantsRoutes } from './+enfants/index';
import { MembresRoutes } from './+membres/index';
import { PartenairesRoutes } from './+partenaires/index';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...PresentationRoutes,
  ...ContactRoutes,
  ...PartenairesRoutes,
  ...MembresRoutes,
  ...CauseRoutes,
  ...DonRoutes,
  ...ActionsRoutes,
  ...EnfantsRoutes,

];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
