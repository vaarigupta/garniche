import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import {ItemList} from './item-list';

@Injectable({
  providedIn: 'root'
})
export class ItemlistService {

  constructor() { }

  getColumns()= string[]{
  return ["itemType", "text"]};
}

getrows()= Observable<any[]>{
  return Observable.of(ItemList);
}

}

