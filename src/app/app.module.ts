import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { DividerComponent } from './shared/components/divider/divider.component';
import { GridComponent } from './components/grid/grid.component';
import { CellComponent } from './components/cell/cell.component';
import { NotificationComponent } from './shared/components/notification/notification.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, DividerComponent, GridComponent, CellComponent, NotificationComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
