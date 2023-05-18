import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TableDataService} from "../../services/tabledata.service";
import {AuthService} from "../../services/authentification.service";
import {OnlyFansTable} from "../../shared/interfaces";
import {defaultColumns} from './constants/default-columns.constant';

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
  selector: 'table-sticky-complex-flex-example',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})

export class TableStickyComplexFlexExample implements OnInit {
  public displayedColumns: string[] = [];
  public defaultColumns: string[] = defaultColumns;
  public dataSource: any[];

  public ELEMENT_DATA: OnlyFansTable[] = []
  //   {
  //     id: 1,
  //     tableType: true,
  //     clientName: 'Alexey',
  //     tableDataSet: [{day: '1', data: 11, id: 1}, {day: '2', data: 22, id: 2},
  //       {day: '3', data: 33, id: 3}, {day: '4', data: 44, id: 4}, {day: '5', data: 55, id: 5}, {
  //         day: '6',
  //         data: 66,
  //         id: 6
  //       }]
  //   },
  //   {
  //     id: 1,
  //     tableType: true,
  //     clientName: 'Alexey',
  //     tableDataSet: [{day: '1', data: 11, id: 1}, {day: '2', data: 22, id: 2},
  //       {day: '3', data: 33, id: 3}, {day: '4', data: 44, id: 4}, {day: '5', data: 55, id: 5}, {
  //         day: '6',
  //         data: 66,
  //         id: 6
  //       }]
  //   }
  // ];

  tables = [0];

  constructor(
    public tableData: TableDataService,
    private authService: AuthService
  ) {

    this.tableData.get_table_data().subscribe(data =>
      //this.ELEMENT_DATA.push(data)
      console.log(data)
    )
    console.log(this.ELEMENT_DATA)
    this.dataSource = this.ELEMENT_DATA.map((data: OnlyFansTable) => {
      const days: Record<string, ITableDay> = {};
      data.tableDataSet.forEach((blabla) => {
        days[blabla.day] = {
          data: blabla.data,
          id: blabla.id
        }
      })
      console.log(data.tableDataSet)

      return {
        ...data,
        ...days,
      }
    })
console.log(this.dataSource)
  }

  ngOnInit() {
    this._initTableColumns();
    console.log(this.dataSource)
    this.tableData.get_table_data().subscribe(data =>
      this.ELEMENT_DATA.push(data)
    )
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  add_table() {
    this.tableData.get_table_data().subscribe(data =>
      this.ELEMENT_DATA.push(data)
    )
  }

  public getColumnHeader(columnName: string): string {
    return tableColumnNameMap[columnName] ? tableColumnNameMap[columnName] : columnName;
  }

  public getTotalCost(columnName: string) {
    return !this.defaultColumns.includes(columnName)
      ? this.dataSource.map(data => data[columnName]?.data).filter((x) => x > 0).reduce((acc, value) => acc + value, 0)
      : "";
  }

  private _initTableColumns(): void {
    const days: any = Array.from({length: 31}, (_, i) => (i + 1).toString())
    this.displayedColumns = [...this.defaultColumns.slice(0, 2), ...days, ...this.defaultColumns.slice(2)]
  }

  public isDefaultColumn(columnName: string): boolean {
    return this.defaultColumns.includes(columnName)
  }
}


