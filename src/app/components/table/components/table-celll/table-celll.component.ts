import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-celll',
  templateUrl: './table-celll.component.html',
  styleUrls: ['./table-celll.component.css']
})
export class TableCelllComponent {
  @Input() isDefaultColumn: boolean;

  @Input() cellData: string;

  public showInput = false

  public onDoubleClick() {
    console.log(this.cellData);
    console.log(this.isDefaultColumn);
    this.showInput = true;
  }
}
