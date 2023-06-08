import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {defaultColumns} from "../table/constants/default-columns.constant";
import {map, Observable} from "rxjs";
import {OnlyFansTable} from "../../shared/interfaces";
import {ITableDay} from "../table/table.component";

import {TableDataService} from "../../services/table.service";

export interface ITabInfo {
  label: Month;
  content: TemplateRef<any>;
}

export const enum Month {
  JANUARY = "January",
  FEBRUARY = "February",
  MARCH = "March",
  APRIL = "April",
  MAY = "May",
  JUNE = "June",
  JULY = "July",
  AUGUST = "August",
  SEPTEMBER = "September",
  OCTOBER = "October",
  NOVEMBER = "November",
  DECEMBER = "December"
}

export const months: Month[] = [
  Month.JANUARY,
  Month.FEBRUARY,
  Month.MARCH,
  Month.APRIL,
  Month.MAY,
  Month.JUNE,
  Month.JULY,
  Month.AUGUST,
  Month.SEPTEMBER,
  Month.OCTOBER,
  Month.NOVEMBER,
  Month.DECEMBER
];

export const monthDaysMap: Record<Month, number> = {
  [Month.JANUARY]:  31,
  [Month.FEBRUARY] : 28,
  [Month.MARCH]: 31,
  [Month.APRIL]: 30,
  [Month.MAY]:31,
  [Month.JUNE]: 30,
  [Month.JULY]: 31,
  [Month.AUGUST]: 31,
  [Month.SEPTEMBER]: 30,
  [Month.OCTOBER]: 31,
  [Month.NOVEMBER]: 30,
  [Month.DECEMBER]: 31
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit{
  public tabs: ITabInfo[];

  public currentMonth: Month = Month.JANUARY;

  public months = months;

  public defaultColumns = defaultColumns;

  public displayedColumns: string[];

  public dataSource$: Observable<OnlyFansTable[]>;

  @ViewChild("dataTableTemplate", {static: true})
  public dataTableTemplate: TemplateRef<any>;

  constructor(
        public tableData: TableDataService
  ) {
  }

  public ngOnInit() {
    this._initDataSource();
    this._initTabs();

  }

  private _initTabs(): void {
    this.tabs = [];
    this.months.forEach((month: Month) => {
      this.tabs.push({
        label: month,
        content: this.dataTableTemplate
      })
    })
  }

  public onTabChange($event: MatTabChangeEvent) {
    this.currentMonth = $event.tab.textLabel as Month;
    this._initColumns();
    this._initDataSource();
  }

  private _initColumns() {
    const days: any = Array.from({length: monthDaysMap[this.currentMonth]}, (_, i) => (i + 1).toString())
    this.displayedColumns = [...this.defaultColumns.slice(0, 2), ...days, ...this.defaultColumns.slice(2)]
  }


  private _initDataSource(): void {
    this.dataSource$ = this.tableData.get_table_data(this.months.indexOf(this.currentMonth) + 1)
      .pipe(
        map((data: OnlyFansTable[]) =>
          data.map((data: OnlyFansTable) => {
            const days: Record<string, ITableDay> = {};
            data.tabledata_set.forEach((blabla) => {
              days[blabla.day] = {
                data: blabla.data,
                id: blabla.id
              }
            })
            return {
              ...data,
              ...days,
            }
          })
        )
  )
  }
}
