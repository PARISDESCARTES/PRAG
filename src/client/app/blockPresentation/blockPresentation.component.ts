import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'myBlockPresentation',
  templateUrl: 'blockPresentation.component.html',
  inputs : ['title','content','imageUrl'],
})
export class BlockComponent {

  title = "Default C";
  content = "Default C";
   imageUrl = "Default C";

  constructor() {
  }

}
