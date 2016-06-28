import { Component } from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";
import { BlockComponent } from '../blockPresentation/blockPresentation.component';
import {BlockService} from "../blockPresentation/blockService";

/**
 * This class represents the lazy loaded CauseComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-cause',
  templateUrl: 'cause.component.html',
  styleUrls: ['cause.component.css']
    directives: [BlockComponent],
   providers: [HTTP_PROVIDERS,BlockService]
})
export class CauseComponent {

  type = "Cause";
  ids = this.blockService.getIdType(this.type);

 constructor(private blockService: BlockService) {}

}
