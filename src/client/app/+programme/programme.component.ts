import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'programme.component.html',
  styleUrls: ['programme.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataTable, Column]

})
export class ProgrammeComponent {}
