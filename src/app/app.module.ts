import {NgModule, Provider} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./main-components/header/header.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {TableComponent} from "./components/table/table.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services/authentification.service";
import {TableCellService} from "./services/tabledata.service";
import {TableCellComponent} from './components/table/components/table-celll/table-cell.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RegistrationComponent} from './components/registration/registration.component';
import {MatCardModule} from "@angular/material/card";
import {RegistrationService} from "./services/registration.service";
import {MainComponent} from './components/main/main.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import { CreateTableComponent } from './components/create-table/create-table.component';
import {MatSelectModule} from "@angular/material/select";
import {TableDataService} from "./services/table.service";
import { ClientListComponent } from './components/client-list/client-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatChipsModule} from "@angular/material/chips";
import {ClientService} from "./services/client.service";
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
// import {AuthInterceptor} from "./shared/auth.interceptor";

// const INTERCEPTOR_PROVIDER: Provider = {
//   provide: HTTP_INTERCEPTORS,
//   multi: true,
//   useClass: AuthInterceptor
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    TableComponent,
    TableCellComponent,
    RegistrationComponent,
    MainComponent,
    CreateTableComponent,
    ClientListComponent,
    ClientProfileComponent,
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
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatSelectModule,
    MatGridListModule,
    MatChipsModule,
  ],
  providers: [
    AuthService,
    TableDataService,
    RegistrationService,
    TableCellService,
    ClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
