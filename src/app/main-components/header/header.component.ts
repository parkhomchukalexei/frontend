import {Component, OnInit} from '@angular/core';
import {HeaderItem} from "./interfaces/header-item.interface";
import {MatDialog} from "@angular/material/dialog";
import {LoginPageComponent} from "../../components/login-page/login-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

public login: string
  public password: string


  public headerItems: HeaderItem[];

  constructor(public dialog: MatDialog) {}
  public ngOnInit() {




    this.headerItems = [
      {
        title: "Onlyfans",
        href: "/onlyfans",
        isVisible: true,

      },
      {
        title: "CharmDate",
        href: "/charm_date",
        isVisible: false,

      },
      {
        title: "Anastasia_dating",
        href: "/anastasia_dating",
        isVisible: true,

      },{
        title: "Hui",
        href: "/hui",
        isVisible: false,

      }
    ]



  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginPageComponent, {
      width: '250px',
      data: {login: this.login, password: this.password}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.login = result.login
      this.password = result.password;
    });
  }
}
