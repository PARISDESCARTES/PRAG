import {BlockListe} from "../blockListe/blockListe";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class MembreService {

  constructor(private http: Http) {}

  getMembresData() {
    return this.http.get('/resources/data/membres-data.json')
      .toPromise()
      .then(res => <BlockListe[]> res.json().data)
      .then(data => { return data; });
  }
}
