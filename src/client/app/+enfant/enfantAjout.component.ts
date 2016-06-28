import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import any = jasmine.any;

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'enfant.form.component.html',
  styleUrls: ['enfant.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS]
})

export class EnfantAjoutComponent {

  private enfant = [];
  private id:any;
  constructor(private router:Router) {
  }

    ngOnInit(){

    }
}


