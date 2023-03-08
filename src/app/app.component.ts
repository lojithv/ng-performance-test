import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { moveItemsInArray } from './moveItemsInList';

const sectionsAndRows = [
  {type: "ROW", costItem:"Test1", notes:"test note", quantity:10, unit:"sq ft", costPer:20,sectionId:1 },
  {type: "ROW", costItem:"Test1", notes:"test note", quantity:10, unit:"sq ft", costPer:20,sectionId:1 },
  {type: "ROW", costItem:"Test1", notes:"test note", quantity:10, unit:"sq ft", costPer:20,sectionId:1 },
  {type: "ROW", costItem:"Test1", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:1 },
  {type: "ROW", costItem:"Test1", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:1  },
  {type: "ROW", costItem:"Test1", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:1  },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:2  },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:2  },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:2 },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20 , sectionId:2  },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:2  },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:2   },
  {type: "ROW", costItem:"Test2", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:2   },
  {type: "ROW", costItem:"Test3", notes:"test note", quantity:10, unit:"sq ft", costPer:20 , sectionId:3 },
  {type: "ROW", costItem:"Test3", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:3  },
  {type: "ROW", costItem:"Test3", notes:"test note", quantity:10, unit:"sq ft", costPer:20 , sectionId:3 },
  {type: "ROW", costItem:"Test3", notes:"test note", quantity:10, unit:"sq ft", costPer:20 , sectionId:3 },
  {type: "ROW", costItem:"Test3", notes:"test note", quantity:10, unit:"sq ft", costPer:20, sectionId:3  }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ng-performance-test';

  initialRow = {
    a1: { t: 'cell' },
    a2: { t: 'cell' },
    a3: { t: 'cell' },
    a4: { t: 'cell' },
    a5: { t: 'cell' },
  };

  rows = [
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow,
    this.initialRow, //24 rows
  ];
  sections = [
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,
    this.rows,  //28 sections
  ];

  items = [
    { name: 'Item 1', selected: false },
    { name: 'Item 2', selected: false },
    { name: 'Item 3', selected: false },
    { name: 'Item 4', selected: false },
    { name: 'Item 5', selected: false }
  ];

  sectionsAndRows:any[] = sectionsAndRows;
  selectedRows: any[] = [];
  movies: any;
  isDragging = false;
  selectedSectionId:string | undefined;
  dragOverSection: any;
  dragOverSectionId: any;

  dragOver(event: Event) {
    event.preventDefault();
    // console.log('drag over');
    // this.handleMouseEnter(event.target as HTMLElement);
  }

  resetMarkedRows(event: Event): void {
    this.handleMouseLeave(event.target as HTMLElement);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sectionsAndRows, event.previousIndex, event.currentIndex);
    // console.log(      event.previousIndex,
    //   event.currentIndex)
    //   const prevIndex = event.previousIndex;
    //   const currIndex = event.currentIndex;
    //   console.log(prevIndex, " ", currIndex)
    
    //   if (prevIndex !== currIndex) {
    //     console.log(this.selectedRows)
    //     const item = this.sectionsAndRows[prevIndex];
    //     console.log(sectionsAndRows)
    //     const deleted = this.sectionsAndRows.splice(this.selectedRows.length ? prevIndex -  this.selectedRows.length: prevIndex, this.selectedRows.length ? this.selectedRows.length : 1);
    //     console.log(sectionsAndRows)
    //     // console.log(deleted)
    //     const newRows = this.sectionsAndRows.splice(currIndex, 0, ...this.selectedRows);
    //     // this.sectionsAndRows = newRows
    //   }
    // this.deselect()
  }

  getRows(sectionId:string){
    const rows = sectionsAndRows.filter((r)=>r.sectionId.toString() === sectionId && r.type === 'ROW');
    return rows
  }

  getSections(){
    const sections = sectionsAndRows.filter((r)=>r.type === 'SECTION');
    return sections
  }

  handleMouseEnter(target: HTMLElement): void {
    const rowOuter = (target as HTMLElement).closest(
      '.row-outer'
    ) as HTMLElement;
    if(rowOuter)
    rowOuter.style.border = '1px solid #FF0000';
    rowOuter.style.backgroundColor = '#0000FF';
  }

  handleMouseLeave(target: HTMLElement): void {
    const rowOuter = (target as HTMLElement).closest(
      '.row-outer'
    ) as HTMLElement;
    if(rowOuter)
    rowOuter.style.border = 'none';
    rowOuter.style.backgroundColor = 'transparent';
  }

  onTouch(event: MouseEvent, idx: number) {
    // event.stopPropagation()
    console.log(this.sectionsAndRows,"#################");

    // this.selectedRows = [];
    const selectedItem: any = this.sectionsAndRows[idx];
    // selectedItem.checked = !selectedItem.checked;
    this.selectedRows.push(selectedItem)
    // this.sectionsAndRows = this.sectionsAndRows.filter(s=>s.sectionId !== selectedItem.sectionId)
    console.log(this.selectedRows)
    // this.selectedSectionId = selectedItem.sectionId
  }

  deselect(){
    this.selectedSectionId=""
    this.selectedRows = [];
    console.log("deselect")
    this.dragOverSectionId=""
    this.dragOverSection=[]
  }

}
