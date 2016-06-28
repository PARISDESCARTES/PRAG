import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from '@angular/forms/index';
import {DataList} from 'primeng/primeng';
import {BilanService} from "./bilanService";
import {Bilan} from "./bilan";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";


@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'bilan.component.html',
  styleUrls: ['bilan.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataList, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, BilanService]
})
export class bilanComponent {
  bilans:Bilan[];

  constructor(private bilanService:BilanService, private router: Router) {
  }

  ngOnInit() {
    this.bilanService.getBilanData().then(bilans => this.bilans = bilans);
  }

}
