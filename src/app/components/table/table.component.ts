import {Component, OnInit} from '@angular/core';
import {MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TableDataService} from "../../services/tabledata.service";
import {AuthService} from "../../services/authentification.service";
import {OnlyFansTable} from "../../shared/interfaces";


/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
@Component({
  selector: 'table-sticky-complex-flex-example',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})

export class TableStickyComplexFlexExample implements OnInit {
  displayedColumns: string[] = [];

  public ELEMENT_DATA : OnlyFansTable[] = [] ;
  public  HUI_DATA: OnlyFansTable[] = [
    {
      id: 6,
    clientSurname: "Petrovna",
    clientName: "Elena",
    operatorName: "iwwmz",
    operatorSurname: "Kakdela",
    tableDataSet: [
      {id: 16,
        day:"3",
        date: "2023-01-03",
        data: 55.0,
        dataType: "OP",
        tableID: 6},
      {id: 17,
        day: "6",
        date: "2023-01-06",
        data: 33.0,
        dataType: "OP",
        tableID: 6}
    ],
    date: "2023-01-01",
    tableType: false,
    client: 1,
    operator: 6}]

  dataSource = this.ELEMENT_DATA;

  tables = [0];




  constructor(
    public tableData: TableDataService,
    private authService: AuthService
  ) {
    this.displayedColumns[0] = 'clientName';
    this.displayedColumns[1] = 'tableType';
    const days: any = Array.from({length: 31}, (_, i) => i + 1)
    for (var day of days) {
      this.displayedColumns.push(day.toString())
    }
    this.displayedColumns.push('Sum')
  }

  ngOnInit() {
    this.tableData.get_table_data().subscribe(data =>
      this.ELEMENT_DATA.push(data)
    )
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  add_table() {
    this.ELEMENT_DATA.push()
  }

  element_Data = {
  }


}
