import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortablejsCmpComponent } from './sortablejs-cmp.component';

describe('SortablejsCmpComponent', () => {
  let component: SortablejsCmpComponent;
  let fixture: ComponentFixture<SortablejsCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortablejsCmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortablejsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
