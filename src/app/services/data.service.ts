import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service connected...');
  }

  getPosts()  {
    return this.http.get('https://jsonplaceholder.typicode.com/posts') // <--- no semicolon here, it will break the map functionality.
      .map(res => res.json());
  }

}
