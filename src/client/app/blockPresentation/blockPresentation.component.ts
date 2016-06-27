import { Component } from '@angular/core';
import { Input } from '@angular/core';
import {BlockService} from "./blockService";
import {Block} from "./blockPresentation";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
  moduleId: module.id,
  selector: 'myBlockPresentation',
  templateUrl: 'blockPresentation.component.html',
  inputs : ['title','content','imageUrl','id'],
  providers: [HTTP_PROVIDERS,BlockService]
})
export class BlockComponent {

  id = [];
  block;
  block = [];

  constructor(private blockService: BlockService) {
     this.blockService.getBlockData().then(blocks => {
       if (blocks) {
          blocks.forEach((block) => {
              if(block.id == this.id){
                this.block = block;
              }
          });
        }
    })


  }

  ngOnInit() {

}
