import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {Fieldset, InputText, Button} from 'primeng/primeng';


/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'filActu.component.html',
  styleUrls: ['filActu.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Fieldset, InputText, Button]

})
export class FilActuComponent {
  text: string;

  post() {
    alert("Commentaire envoyé !");
  }
}
