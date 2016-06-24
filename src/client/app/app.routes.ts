import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+accueil/index';
import { EnfantRoutes } from './+enfant/index';
import { FilActuRoutes } from './+filActu/index';
import { ProgrammeRoutes } from './+programme/index';
import { CompteRenduRoutes } from './+compteRendu/index';
import { DashboardRoutes } from './+dashboard/index';
import { bilanRoutes } from './+bilan/index';



const routes: RouterConfig = [
  ...HomeRoutes,
  ...EnfantRoutes,
  ...FilActuRoutes,
  ...ProgrammeRoutes,
  ...CompteRenduRoutes,
  ...DashboardRoutes,
  ...bilanRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
