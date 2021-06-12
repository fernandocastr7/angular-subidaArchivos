import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador.component';
import { SubidaComponent } from './SubidaArchivos/subida.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    SubidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
