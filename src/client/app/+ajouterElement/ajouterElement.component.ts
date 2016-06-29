import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {Panel} from 'primeng/primeng';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Growl} from 'primeng/primeng';
import {Calendar} from 'primeng/primeng';


/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'ajouterElement.component.html',
  styleUrls: ['ajouterElement.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, Panel,Calendar,TabView, TabPanel, Growl, SplitButton, SplitButtonItem]

})

export class AjouterElementComponent {
  date2: string;

  fr: any;

  ngOnInit() {
    this.fr = {
      closeText: "Fermer",
      prevText: "<Pre",
      nextText: "Suiv>",
      currentText: "Aujourd'hui",
      monthNames: [ "janvier","février","mars","avril","mai","juin",
        "juillet","août","septembre","octobre","novembre","décembre" ],
      monthNamesShort: [ "janv","fév","mar","avr","mai","juin",
        "juil","août","sept","oct","nov","déc" ],
      dayNames: [ "dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi" ],
      dayNamesShort: [ "dim","lun","mar","mer","jeu","ven","sam" ],
      dayNamesMin: [ "D","L","M","M","J","V","S" ],
      weekHeader: "Wk",
      dateFormat: "dd/mm/yy",
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ""
    };
  }
}
