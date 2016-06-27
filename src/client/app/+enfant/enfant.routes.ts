import {EnfantDetail} from "./enfantDetail.component";
import {EnfantComponent} from "./enfant.component";

export const EnfantRoutes = [
  {
    path: 'enfant',
    component: EnfantComponent,
    children: [
      { path: ':id',  component: EnfantDetail },
      { path: '',     component: EnfantComponent }
    ]
  }
];
