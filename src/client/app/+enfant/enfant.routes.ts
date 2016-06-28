import {EnfantDetail} from "./enfantDetail.component";
import {EnfantComponent} from "./enfant.component";
import {EnfantAjoutComponent} from "./enfantAjout.component";

export const EnfantRoutes = [
  { path: 'enfant/:id', component: EnfantDetail },
  { path: 'enfant', component: EnfantComponent },
  { path: 'ajout/enfant', component: EnfantAjoutComponent }
];
