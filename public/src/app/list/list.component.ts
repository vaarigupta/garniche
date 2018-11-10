import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {ItemList} from './item-list';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
dataSource: ItemList;

/** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['itemType', 'text' , 'price'];
  constructor(private http: HttpClient) {
    }

    ngOnInit() {
       this.dataSource = new ItemList(this.paginator, this.sort);
        let obs = this.http.get("https://hidden-taiga-53783.herokuapp.com/items");
            obs.subscribe((data)=> console.log(data))

          }

        }
