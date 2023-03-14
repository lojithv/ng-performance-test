import { Component } from '@angular/core';

@Component({
  selector: 'app-sortablejs-cmp',
  templateUrl: './sortablejs-cmp.component.html',
  styleUrls: ['./sortablejs-cmp.component.scss']
})
export class SortablejsCmpComponent {
  normalList1 = ["1", "2", "3", "4", "5"];

  normalList2 = ["6", "7", "8", "9", "10"];

  normalOptions = {
    multiDrag: true,
    group: "group"
  };

  onUpdateList1(event: any) {
    console.log(event);
  }
}
