import {Component, Injector} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {DataList} from "primeng/primeng";
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {EnfantService} from "./enfantService";
import {HTTP_PROVIDERS} from "@angular/http";
import {Enfant} from "./enfant";
import forEach = require("core-js/fn/array/for-each");
import any = jasmine.any;

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'enfant.detail.component.html',
  styleUrls: ['enfant.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataList, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, EnfantService]
})

export class EnfantDetail {

  private enfantDetails = [];
  enfants:Enfant[];
  private id:any;
  private sub: any;

  constructor(private route:ActivatedRoute,
              private router:Router,
              private service:EnfantService) {
  }
    ngOnInit(){
      this.id = [];
      this.sub = this.route.params.subscribe(params => this.id = +params['id']);
      this.id = this.id + "";
      
      let temp = this.service.getEnfantsData().then(enfants_tab => {
        if (enfants_tab) {
          enfants_tab.forEach((enfant_simple) => {
            if (enfant_simple.id == this.id) {
              this.enfantDetails = enfant_simple;
            }
          });
        }
      });
    }
}


