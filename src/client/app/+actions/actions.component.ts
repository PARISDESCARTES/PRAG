import { Component } from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";
import { BlockComponent } from '../blockPresentation/blockPresentation.component';
import {BlockService} from "../blockPresentation/blockService";

/**
 * This class represents the lazy loaded ActionsComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-actions',
  templateUrl: 'actions.component.html',
  styleUrls: ['actions.component.css'],
  directives: [BlockComponent],
   providers: [HTTP_PROVIDERS,BlockService]
})
export class ActionsComponent {

  type = "Actions";
  ids = this.blockService.getIdType(this.type);

   constructor(private blockService: BlockService) {}

}
