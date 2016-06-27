import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms/index';
import {Button, InputText, Panel} from 'primeng/primeng';
import {HTTP_PROVIDERS} from "@angular/http";

import { NameListService } from '../shared/index';

import { BlockComponent } from '../blockPresentation/blockPresentation.component';
import {BlockService} from "../blockPresentation/blockService";
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [REACTIVE_FORM_DIRECTIVES,Button, InputText, Panel,BlockComponent],
   providers: [HTTP_PROVIDERS,BlockService]
})
export class HomeComponent {

  newName: string;

  type = "Presentation";
  ids = this.blockService.getIdType(this.type);


  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService,private blockService: BlockService) {


  }

  /**
   * Calls the add method of the NameListService with the current newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    return false;
  }

}
