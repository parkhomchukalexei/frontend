import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authentification.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LoginData} from "../../shared/interfaces";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit{

  private aSub: Subscription

constructor(
    public dialogRef: MatDialogRef<LoginPageComponent>,
    private auth: AuthService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: LoginData) {}


  onNoClick(): void {
    this.aSub = this.auth.login({username: this.data.login, password: this.data.password}).subscribe((data)=> {
      this.dialogRef.close()
  })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

}
