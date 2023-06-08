import {Component, NgModule, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {RegistrationService} from "../../services/registration.service";
import {Router} from "@angular/router";

export interface IRegistrationForm  {
  first_name: FormControl<string>;
  last_name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  username: FormControl<string>;
  password_confirm: FormControl<string>;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup<IRegistrationForm>;

  constructor(
    public service : RegistrationService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
  }

  public ngOnInit() {
    this._initRegistrationForm();
  }

  register() {
    this.service.register(this.registrationForm.value as unknown as IRegistrationForm)
      .subscribe((data) => {
        if (data) {this.router.navigate(['/workpage'])}
        else {
          console.log("error")
        }
      });

  }
  private _initRegistrationForm() {
    this.registrationForm = new FormGroup<IRegistrationForm>({
      first_name: new FormControl<string>("", {
        validators: [Validators.required, Validators.minLength(5)],
        nonNullable: true
      }),
      last_name: new FormControl<string>("", {nonNullable: true}),
      email: new FormControl<string>("", {nonNullable: true}),
      password: new FormControl<string>("", {nonNullable: true}),
      password_confirm: new FormControl<string>("", {nonNullable: true}),
      username: new FormControl<string>("", {nonNullable: true}),
    })
  }
}
