import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {CellWithData, OnlyFansTable} from "../../shared/interfaces";
import {defaultColumns} from './constants/default-columns.constant';
import {map, Observable, tap} from "rxjs";
import {DialogRef} from "@angular/cdk/dialog";
import {MatDialog} from "@angular/material/dialog";
import {CreateTableComponent} from "../create-table/create-table.component";

import {TableDataService} from "../../services/table.service";

export const tableColumnNameMap: Record<string, string> = {
  "clientName": "Client Name",
  "tableType": "Table Type"
}

export interface ITableDay {
  data: number;
  id: number;
  tableID?: number;
  day?: number;

}


/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})

export class TableComponent implements OnInit {
  @Input()
  public displayedColumns: string[] = [];

  public defaultColumns: string[] = defaultColumns;

  @Input()
  public dataSource$: Observable<OnlyFansTable[]>;

  public dataSource: OnlyFansTable[];

  public createNewTableService: TableDataService

  @Input()
  public month: number;

  constructor(
    public dialog : MatDialog
  ) {
  }

  ngOnInit() {
    this.dataSource$.subscribe((data) => this.dataSource = data)
  }


  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  add_table() {
  const dialog = this.dialog.open(CreateTableComponent)
    // data: {month: this.month, tableType: , client: this.Client,
    //     operator: this.operator}})

    // dialog.afterClosed().subscribe(
    //   result => {
    //     console.log('hui')

        // this.createNewTableService.createNewTable({month: result.month, tableType: result.TableType, client: result.Client,
        // operator: result.operator})
        // console.log(result)
      // }
    // )

  }

  public getColumnHeader(columnName: string): string {
    return tableColumnNameMap[columnName] ? tableColumnNameMap[columnName] : columnName;
  }

  public getTotalCost(columnName: keyof OnlyFansTable)  {

    if (this.defaultColumns.includes(columnName as string)) {
      return "";
    }
    else{
      let counter = 0;
      let TableCounter = 0;
      (this.dataSource || []).forEach((dataSourceItem: OnlyFansTable) => {
        counter += (dataSourceItem[columnName] as unknown as CellWithData)?.data || 0;
      })
        return counter;
      // return this.dataSource$.forEach(data  => data[columnName]?.data).filter((x) => x > 0).reduce((acc, value) => acc + value, 0)
    }
  }

  public getTableCost(){
    let columnName = 1
      let counter = 0;
  }

  public isDefaultColumn(columnName: string): boolean {
    return this.defaultColumns.includes(columnName)
  }

}
