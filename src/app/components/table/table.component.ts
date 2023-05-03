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
  displayedHeader: string[] = [];
  displayedFooter: string[] = [];

  public ELEMENT_DATA: OnlyFansTable[] = [
  {
    id: 1, tableType: true, clientName: 'Alexey', tableDataSet: [{day: '1', data: 11, id: 1}, {day: '2', data: 22, id: 2},
      {day: '3', data: 33, id: 3}, {day: '4', data: 44, id: 4}, {day: '5', data: 55, id: 5}, {day: '6', data: 66, id: 6}]
  }];

  dataSource = this.ELEMENT_DATA;

  tables = [0];

  constructor(
    public tableData: TableDataService,
    private authService: AuthService
  ) {
    // this.displayedHeader[0] = 'clientName';
    // this.displayedHeader[1] = 'tableType';
    // this.displayedFooter[0] = 'clientName';
    // this.displayedFooter[1] = 'tableType';
    this.displayedColumns[0] = 'Client Name'
    this.displayedColumns[1] = 'Table Type';

    const days: any = Array.from({length: 31}, (_, i) => i + 1)
    for (var day of days) {
      this.displayedHeader.push(day.toString())
      this.displayedColumns.push(day.toString())
      this.displayedFooter.push(day.toString())
    }
    // this.displayedHeader.push('Sum')
    // this.displayedFooter.push('Sum')
  }

  ngOnInit() {
    this.tableData.get_table_data().subscribe(data =>
      //this.ELEMENT_DATA.push(data)
      console.log(data)
    )
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }

  add_table() {
    //this.ELEMENT_DATA.push()
  }
}

