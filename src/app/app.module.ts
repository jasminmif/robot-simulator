import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/button/button.component';
import { DividerComponent } from './shared/divider/divider.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, DividerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
