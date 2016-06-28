import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {EnfantService} from "./enfantService";
import {HTTP_PROVIDERS} from "@angular/http";
import {Enfant} from "./enfant";
import forEach = require("core-js/fn/array/for-each");
import any = jasmine.any;
import {Panel} from 'primeng/primeng';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {Growl} from 'primeng/primeng';


@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'enfant.detail.component.html',
  styleUrls: ['enfant.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES, Panel, Panel, TabView, TabPanel, Growl, SplitButton, SplitButtonItem],
  providers: [HTTP_PROVIDERS, EnfantService]
})

export class EnfantDetail {

  private enfantDetails = [];
  enfants:Enfant[];
  private id:any;
  private sub:any;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:EnfantService) {
  }

  ngOnInit() {
    this.id = [];
    this.sub = this.route.params.subscribe(params => this.id = +params['id']);
    this.id = this.id + "";

    let temp = this.service.getEnfantsData().then(blabla => {
      if (blabla) {
        blabla.forEach((bla) => {
          if (bla.id == this.id) {
            this.enfantDetails = bla;
            this.enfantDetails.nom = this.enfantDetails.nom.toUpperCase();
          }
        });
      }
    });
  }

  msgs:Message[] = [];

  update() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Mise à jour de l\'enfant'});
  }

  dossierPersonnel() {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Success', detail: 'Accès au dossier personnel'});
  }

}


