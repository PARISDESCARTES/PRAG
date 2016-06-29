import { Component } from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";
import { BlockComponent } from '../blockPresentation/blockPresentation.component';
import {BlockService} from "../blockPresentation/blockService";
/**
 * This class represents the lazy loaded PresentationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-presentation',
  templateUrl: 'presentation.component.html',
  styleUrls: ['presentation.component.css'],
 directives: [BlockComponent],
   providers: [HTTP_PROVIDERS,BlockService]
})
export class PresentationComponent {

  type = "Presentation";
  ids = this.blockService.getIdType(this.type);

   constructor(private blockService: BlockService) {}

}
