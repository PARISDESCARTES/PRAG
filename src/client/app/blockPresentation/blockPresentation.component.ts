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
  providers: [HTTP_PROVIDERS,BlockService],
  styleUrls: ['blockPresentation.component.css'],
  host:     {'[class.Vertical]':'Vertical','[class.Horizontal]':'Horizontal','[class.HalfHorizontal]':'HalfHorizontal','[class.HalfVertical]':'HalfVertical'}
})
export class BlockComponent {

  Vertical : bool = false;
  Horizontal : bool = false;
  HalfHorizontal : bool = false;
  HalfVertical : bool = false;

  id = [];
  block;
  block = [];

  constructor(private blockService: BlockService) {
     this.blockService.getBlockData().then(blocks => {
       if (blocks) {
          blocks.forEach((block) => {
              if(block.id == this.id){
                this.block = block;

                  if(this.block.style == "Vertical"){
                    this.Vertical= true;
                  }
                  if(this.block.style == "Horizontal"){
                    this.Horizontal= true;
                  }
                  if(this.block.style == "HalfHorizontal"){
                    this.HalfHorizontal= true;
                  }
                  if(this.block.style == "HalfVertical"){
                    this.HalfVertical= true;
                  }
              }
          });
        }
      })
  }
}

