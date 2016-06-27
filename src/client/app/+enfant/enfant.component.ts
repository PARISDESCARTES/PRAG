import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {DataList} from 'primeng/primeng';
import {EnfantService} from "./enfantService";
import {Enfant} from "./enfant";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";


/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'enfant.component.html',
  styleUrls: ['enfant.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataList, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS,EnfantService]
})
export class EnfantComponent {
  enfants: Enfant[];

  selectedEnfant: Enfant;

  displayDialog: boolean;

  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
    this.enfantService.getEnfantsData().then(enfants => this.enfants = enfants);
  }

  selectEnfant(enfant: Enfant) {
    this.selectedEnfant = enfant;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedEnfant = null;
  }
}
