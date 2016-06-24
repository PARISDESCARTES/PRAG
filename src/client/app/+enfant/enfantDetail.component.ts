import {Component, Injector} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {DataList} from "primeng/primeng";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'enfant.detail.component.html',
  styleUrls: ['enfant.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataList, ROUTER_DIRECTIVES],
})

export class EnfantDetail {

}
