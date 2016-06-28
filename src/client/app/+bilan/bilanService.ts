import {Bilan} from "./bilan";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class BilanService {

  constructor(private http: Http) {}

  getBilanData() {
    return this.http.get('/resources/data/bilan-data.json')
      .toPromise()
      .then(res => <Bilan[]> res.json().data)
      .then(data=> { return data; });
  }

}
