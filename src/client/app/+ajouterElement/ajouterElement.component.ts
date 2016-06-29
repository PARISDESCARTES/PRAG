import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {Panel} from 'primeng/primeng';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Growl} from 'primeng/primeng';

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'ajouterElement.component.html',
  styleUrls: ['ajouterElement.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Panel, TabView, TabPanel, Growl, SplitButton, SplitButtonItem]

})

export class AjouterElementComponent {
}
