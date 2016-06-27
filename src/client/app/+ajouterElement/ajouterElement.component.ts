import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {Dropdown, SelectItem} from 'primeng/primeng';

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'ajouterElement.component.html',
  styleUrls: ['ajouterElement.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Dropdown]

})

export class AjouterElementComponent {
categorie: SelectItem[];

    selectedCategorie: string;

    constructor() {
        this.categorie = [];
        this.categorie.push({label:'Bilan', value:'Bilan'});
        this.categorie.push({label:'A voir', value:'A voir'});
        this.categorie.push({label:'A voir', value:'A voir'});
        this.categorie.push({label:'A voir', value:'A voir'});
        
    }
}

