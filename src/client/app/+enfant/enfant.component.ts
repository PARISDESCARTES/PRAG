import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: '+enfant.component.html',
  styleUrls: ['+enfant.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES]

})
export class EnfantComponent {}
