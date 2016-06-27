import {BlockListe} from "../blockListe/blockListe";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class PartenaireService {

  constructor(private http: Http) {}

  getPartenairesData() {
    return this.http.get('/resources/data/partenaires-data.json')
      .toPromise()
      .then(res => <BlockListe[]> res.json().data)
      .then(data => { return data; });
  }
}
