import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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

  dragOver(event: Event, sectionIndex: any, rowIndex: any) {
    event.preventDefault();
    console.log('drag over');
    this.handleMouseEnter(event.target as HTMLElement);
  }

  resetMarkedRows(event: Event): void {
    this.handleMouseLeave(event.target as HTMLElement);
  }

  onDrop() {
    console.log('onDrop');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);
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
}
