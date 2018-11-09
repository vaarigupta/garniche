import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemList} from '../item-list';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   item = ItemList;

  constructor(private http: HttpClient) {
    }

    ngOnInit() {
        let obs = this.http.get("https://hidden-taiga-53783.herokuapp.com/items");
            obs.subscribe((data)=> console.log(data))

          }

        }
