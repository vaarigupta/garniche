import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemList} from '../item-list';
import {Http} from "@angular/http";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   item = ItemList;
  
  constructor(private http: Http) {
    }

    ngOnInit(): void {
        this.http.get("../data.json")
            .subscribe((data)=> {
                console.log(data)
            });
    }

    }

}

