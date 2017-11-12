import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasportService {

  constructor(public http: Http) {
    console.log('Data service connected....');
   }
   getSportPost() {
    return  this.http.get('https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=ef67bbc888aa460fad925c0383d2ff0b')
      .map(res => res.json());
    }
}
