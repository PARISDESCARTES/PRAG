import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'compteRendu.component.html',
  styleUrls: ['compteRendu.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]

})
export class CompteRenduComponent {}
