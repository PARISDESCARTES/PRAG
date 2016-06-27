import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {DataList} from 'primeng/primeng';
import {MembreService} from "./membreService";
import {BlockListe} from "../blockListe/blockListe";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";


/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-membre',
  templateUrl: 'membre.component.html',
  styleUrls: ['membre.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataList, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS,MembreService]
})
export class MembreComponent {
  membres: BlockListe[];

  selectedMembre: BlockListe;

  displayDialog: boolean;

  constructor(private membreService: MembreService) { }

  ngOnInit() {
    this.membreService.getMembresData().then(membres => this.membres = membres);
  }

  selectMembre(membre: BlockListe) {
    this.selectedMembre = membre;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedMembre = null;
  }
}
