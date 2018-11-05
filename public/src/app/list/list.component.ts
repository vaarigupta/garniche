import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {ItemList} from '../item-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   item : ItemList;

  constructor() { }

  ngOnInit() {
  }

}
