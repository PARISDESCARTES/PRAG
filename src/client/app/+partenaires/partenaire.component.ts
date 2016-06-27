import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {DataList} from 'primeng/primeng';
import {PartenairesService} from "./partenairesService";
import {BlockListe} from "../blockListe/blockListe";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-partenaire',
  templateUrl: 'partenaire.component.html',
  styleUrls: ['partenaire.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataList, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS,PartenairesService]
})
export class PartenaireComponent {
  partenaires: BlockListe[];

  selectedPartenaire: BlockListe;

  displayDialog: boolean;

  constructor(private partenairesService: PartenairesService) { }

  ngOnInit() {
    this.partenaireService.getPartenairesData().then(partenaires => this.partenaires = partenaires);
  }

  selectPartenaire(partenaires: BlockListe) {
    this.selectedPartenaire = partenaire;
    this.displayDialog = true;
  }

  onDialogHide() {
    this.selectedPartenaire = null;
  }
}
