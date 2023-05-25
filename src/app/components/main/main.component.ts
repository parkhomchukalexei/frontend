import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';

export interface ITabInfo {
  label: string;
  content: TemplateRef<any>;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit{
  public tabs: ITabInfo[];

  @ViewChild("dataTableTemplate", {static: true})
  public dataTableTemplate: TemplateRef<any>;

  public ngOnInit() {
    this._initTabs();
  }

  private _initTabs(): void {
    this.tabs = [
      {
        label: "December",
        content: this.dataTableTemplate
      },
      {
        label: "January",
        content: this.dataTableTemplate
      },
      {
        label: "February",
        content: this.dataTableTemplate
      },
      {
        label: "March",
        content: this.dataTableTemplate
      },
      {
        label: "April",
        content: this.dataTableTemplate
      },
      {
        label: "May",
        content: this.dataTableTemplate
      },
      {
        label: "June",
        content: this.dataTableTemplate
      },
      {
        label: "July",
        content: this.dataTableTemplate
      },
      {
        label: "August",
        content: this.dataTableTemplate
      },
      {
        label: "September",
        content: this.dataTableTemplate
      },
      {
        label: "October",
        content: this.dataTableTemplate
      },
      {
        label: "November",
        content: this.dataTableTemplate
      }
    ]
  }
}
