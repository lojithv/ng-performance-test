import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  handleMouseEnter(target: HTMLElement): void {
    const rowOuter = (target as HTMLElement).closest(
      '.row-outer'
    ) as HTMLElement;
    if(rowOuter)
    rowOuter.style.border = '1px solid #00FF00';
  }

  handleMouseLeave(target: HTMLElement): void {
    const rowOuter = (target as HTMLElement).closest(
      '.row-outer'
    ) as HTMLElement;
    if(rowOuter)
    rowOuter.style.border = 'none';
  }
}
