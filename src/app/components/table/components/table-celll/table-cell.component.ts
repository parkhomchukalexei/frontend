import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent {

  @Input() isDefaultColumn: boolean;

  @Input() cellData: string;

  public showInput = false

  public onDoubleClick() {
    this.showInput = true;
  }

  protected readonly document = document;
}
