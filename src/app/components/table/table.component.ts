import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TableDataService} from "../../services/tabledata.service";
import {AuthService} from "../../services/authentification.service";
import {OnlyFansTable} from "../../shared/interfaces";
import {defaultColumns} from './constants/default-columns.constant';
import {map, Observable, tap} from "rxjs";

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
  public dataSource$: Observable<OnlyFansTable[]>;

  tables = [0];
  panelOpenState: boolean = false;

  constructor(
    public tableData: TableDataService,
    private authService: AuthService
  ) {
    this.dataSource$ = this.tableData.get_table_data()
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

  ngOnInit() {
    this._initTableColumns();
    // this.tableData.get_table_data().subscribe(data =>
    //   console.log(data)
    // )
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  add_table() {
    // this.tableData.get_table_data().subscribe(data =>
    //   this.ELEMENT_DATA.push()
      // console.log('hui')
    // )
  }

  public getColumnHeader(columnName: string): string {
    return tableColumnNameMap[columnName] ? tableColumnNameMap[columnName] : columnName;
  }

  public getTotalCost(columnName: string)  {
    return !this.defaultColumns.includes(columnName)
      // ? this.dataSource$.forEach(data  => data[columnName]?.data).filter((x) => x > 0).reduce((acc, value) => acc + value, 0)
      // : "";
  }

  private _initTableColumns(): void {
    const days: any = Array.from({length: 31}, (_, i) => (i + 1).toString())
    this.displayedColumns = [...this.defaultColumns.slice(0, 2), ...days, ...this.defaultColumns.slice(2)]
  }

  public isDefaultColumn(columnName: string): boolean {
    return this.defaultColumns.includes(columnName)
  }
}
