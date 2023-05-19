import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

export interface ITabInfo {
  label: string;
  content: TemplateRef<any>;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
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
      }
    ]
  }
}
