import {Component} from '@angular/core';

export interface PeriodicElement {
  ClientName: string;
  TableType: string;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ClientName: 'Alexey', TableType: "OP", id: 1}
];

/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
@Component({
  selector: 'TestTableComponent',
  styleUrls: ['test-table.component.css'],
  templateUrl: 'test-table.component.html',
})
export class TestTableComponent {
  columns = [
    {
      columnDef: 'Client Name',
      header: 'Client Name',
      cell: (element: PeriodicElement) => `${element.ClientName}`,
    },
    {
      columnDef: 'TableType',
      header: 'TableType',
      cell: (element: PeriodicElement) => `${element.TableType}`,
    },
  ];


  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);
}
