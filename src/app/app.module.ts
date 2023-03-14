import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HighlightDirective } from './highlight.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { SortablejsModule } from 'ngx-sortablejs';
import { SortablejsCmpComponent } from './sortablejs-cmp/sortablejs-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    SortablejsCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    BrowserAnimationsModule,
    DragDropModule,
    SortablejsModule.forRoot({ animation: 150 }),
    MatCheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
