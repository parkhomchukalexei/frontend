import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentification.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup(
      {
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
      })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

 onSubmit() {
    this.aSub = this.auth.login(this.form.value).subscribe((data)=> {
     this.form.reset()
      this.router.navigate(['/workpage'])
   })
  }
}
