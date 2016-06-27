import {Block} from "./Block";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
@Injectable()
export class BlockService {

temp;

constructor(private http: Http) {}

  getBlockData() {
    return this.http.get('/resources/data/block-data.json')
      .toPromise()
      .then(res => <Block[]> res.json().data)
      .then(data => { return data; });
  }


getIdType(type:String) {
    let res = [];
    let temp = this.getBlockData().then(blocks => {
     if (blocks) {
        blocks.forEach((block) => {
            if(block.type == type){
              res.push(block.id);
            }
        });
      }
     });
    return res;
  };


  getBlockDataWithId(id:number) {
    let res = [];
    let temp = this.getBlockData().then(blocks => {
     if (blocks) {
        blocks.forEach((block) => {
            if(block.id == "1"){
              res = block;
            }
        });
      }
  });



