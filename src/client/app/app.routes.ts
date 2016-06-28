import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+accueil/index';
import { EnfantRoutes } from './+enfant/index';
import { FilActuRoutes } from './+filActu/index';
import { ProgrammeRoutes } from './+programme/index';
import { AjouterElementRoutes } from './+ajouterElement/index';
import { DashboardRoutes } from './+dashboard/index';
import { bilanRoutes } from './+bilan/index';



const routes: RouterConfig = [
  ...HomeRoutes,
  ...EnfantRoutes,
  ...FilActuRoutes,
  ...ProgrammeRoutes,
  ...AjouterElementRoutes,
  ...DashboardRoutes,
  ...bilanRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
