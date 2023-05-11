import {Component, NgModule} from '@angular/core';
import {RegistrationData} from "../../shared/interfaces";
import {FormsModule} from "@angular/forms";
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public lname: string
  public fname: string
  public email: string
  public password: string
  public username: string
  public password_confirm: string

  constructor(
    public service : RegistrationService ) {}
  register() {
    this.service.register({last_name: this.lname, first_name: this.fname,password: this.password,email: this.email,
    username: this.username, password_confirm: this.password_confirm})
  }
}