import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-components/header/header.component';
import { TableStickyComplexFlexExample } from './components/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {AuthService} from "./services/authentification.service";
import {TableDataService} from "./services/tabledata.service";
import {HttpClientModule} from "@angular/common/http";
import { LoginPageComponent } from './components/login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { TestTableComponent } from './components/test-table/test-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableStickyComplexFlexExample,
    LoginPageComponent,
    TestTableComponent,
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
export class AppModule {

}
