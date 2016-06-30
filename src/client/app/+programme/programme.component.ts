import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {Programme} from "./programme";
import {Mecene} from "./mecene";
import {ProgrammeService} from "./programmeService";
import {Router} from "express";

/**
 * This class represents the lazy loaded EnfantComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'programme.component.html',
  styleUrls: ['programme.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES, DataTable, Column]

})
export class ProgrammeComponent {
  programme:Programme[];
  mecene:Mecene[];


  constructor(private programmeService:ProgrammeService, private router: Router) {
  }

  ngOnInit() {
    this.programmeService.getProgrammeData().then(programme => this.programme = programme);
    this.programmeService.getMeceneData().then(mecene => this.mecene = mecene);

  }
}
