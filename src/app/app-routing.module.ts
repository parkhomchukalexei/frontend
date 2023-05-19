import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {TableComponent} from "./components/table/table.component";
import {HeaderComponent} from "./main-components/header/header.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'workpage', component: MainComponent},
  {path: 'register', component: RegistrationComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

