import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./main-components/header/header.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {TableStickyComplexFlexExample} from "./components/table/table.component";
import {TestTableComponent} from "./components/test-table/test-table.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/authentification.service";
import {TableDataService} from "./services/tabledata.service";
import { TableCelllComponent } from './components/table/components/table-celll/table-celll.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    TableStickyComplexFlexExample,
    TestTableComponent,
    TableCelllComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, TableDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
