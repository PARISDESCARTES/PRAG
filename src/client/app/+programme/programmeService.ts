import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Programme} from "./programme";
import {Mecene} from "./mecene";

@Injectable()
export class ProgrammeService {

  constructor(private http: Http) {}

  getProgrammeData() {
    return this.http.get('/resources/data/programme-data.json')
      .toPromise()
      .then(res => <Programme[]> res.json().data)
      .then(data=> { return data; });
  }

  getMeceneData() {
    return this.http.get('/resources/data/mecene-data.json')
      .toPromise()
      .then(res => <Mecene[]> res.json().data)
      .then(data=> { return data; });
  }

}
