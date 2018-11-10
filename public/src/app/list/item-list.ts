import {Item} from './item';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

 const ListofItem : Item[] =[

	{
		 itemType: "fast Food",
	    price: 100,
	    text: "pizza",
	},
	{
		itemType: "italian Food",
	    price: 90,
	    text: "pasta",
	  },
    {
    itemType: "South Indian Food",
    price: 90,
    text: "Dosa",
    },
   {
    itemType: "North Indian Food",
    price: 200,
    text: "Roti -Makhani Dal",
   }

];


export class ItemList extends DataSource<Item> {
  data: Item[] = ListofItem;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }


  connect(): Observable<Item[]> {

    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }


  disconnect() {}


  private getPagedData(data: Item[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }


  private getSortedData(data: Item[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'itemType': return compare(a.itemType, b.itemType, isAsc);
        case 'price': return compare(+a.price, +b.price, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
