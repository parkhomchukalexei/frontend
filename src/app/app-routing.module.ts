import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {TableStickyComplexFlexExample} from "./components/table/table.component";
import {HeaderComponent} from "./main-components/header/header.component";
import { TestTableComponent } from './components/test-table/test-table.component';
import {RegistrationComponent} from "./components/registration/registration.component";

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'workpage', component: TableStickyComplexFlexExample},
  {path: 'test', component: TestTableComponent},
  {path: 'register', component: RegistrationComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

