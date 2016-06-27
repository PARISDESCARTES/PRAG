import {EnfantDetail} from "./enfantDetail.component";
import {EnfantComponent} from "./enfant.component";

export const EnfantRoutes = [
  { path: 'enfant/:id', component: EnfantDetail },
  { path: 'enfant', component: EnfantComponent }
];
