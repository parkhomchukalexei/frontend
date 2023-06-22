import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HeaderComponent} from "./main-components/header/header.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {MainComponent} from "./components/main/main.component";
import {ClientListComponent} from "./components/client-list/client-list.component";
import {ClientProfileComponent} from "./components/client-profile/client-profile.component";

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'workpage', component: MainComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'clientlist', component: ClientListComponent},
  {path: 'clientprofile', component: ClientProfileComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}

