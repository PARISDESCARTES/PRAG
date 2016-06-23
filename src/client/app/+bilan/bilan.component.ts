import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';

/**
 * This class represents the lazy loaded BilanComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'bilan.component.html',
  styleUrls: ['bilan.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]

})
export class bilanComponent {}
