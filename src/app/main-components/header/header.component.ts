import {Component, OnInit} from '@angular/core';
import {HeaderItem} from "./interfaces/header-item.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit{

  public headerItems: HeaderItem[];

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
}
