import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms/index';
import {Dropdown, SelectItem, InputText, InputTextarea, Button, Calendar} from 'primeng/primeng';

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'ajouterElement.component.html',
  styleUrls: ['ajouterElement.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Dropdown, InputText, InputTextarea, Button, Calendar]

})

export class AjouterElementComponent {
  onclick() {

  }

  categorie:SelectItem[];
  cat_therapie:SelectItem[];


  constructor() {
    this.categorie = [];
    this.cat_therapie = [];
  }

  ngOnInit() {
    this.categorie.push({label: 'Selectionnez votre type', value: ''});
    this.categorie.push({label: 'Bilan', value: 'Bilan'});
    this.categorie.push({label: 'A voir', value: 'A voir'});
    this.categorie.push({label: 'A voir', value: 'A voir'});

    this.cat_therapie.push({label: 'Selectionnez une thérapie', value: ''});
    this.cat_therapie.push({label: 'A voir', value: 'A voir'});
    this.cat_therapie.push({label: 'A voir', value: 'A voir'});
    this.cat_therapie.push({label: 'A voir', value: 'A voir'});
  }

}

