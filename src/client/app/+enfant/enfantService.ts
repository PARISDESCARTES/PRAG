import {Enfant} from "./enfant";
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class EnfantService {

  constructor(private http: Http) {}

  getEnfantsData() {
    return this.http.get('/resources/data/enfants-data.json')
      .toPromise()
      .then(res => <Enfant[]> res.json().data)
      .then(data=> { return data; });
  }

}
