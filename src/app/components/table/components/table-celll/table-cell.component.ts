import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITableDay} from "../../table.component";
import {FormControl} from "@angular/forms";
import {TableCellService} from "../../../../services/tabledata.service";

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css']
})
export class TableCellComponent implements OnInit {

  constructor(private service: TableCellService) {
  }

  @Input() tableId: number;

  @Input() day: number;

  @Input() isDefaultColumn: boolean;

  @Input() cellData: ITableDay;

  public formControl: FormControl;

  public showInput = false;

  public onDoubleClick() {
    this.showInput = true;
  }

  protected readonly document = document;

  public onEnter() {
    //тут сделать проверку на велью и отправлять либо патч либо Пост
    if( this.cellData != undefined){
      this.service.patch_table_cell(this.cellData.id, this.formControl.value)
    }
    else{
      this.service.create_new_table_cell(this.tableId, this.day, this.formControl.value)
    }

    this.showInput = false;
    //тут как отобржатаь новую кнопку
    this.cellData["data"] = this.formControl.value;

  }

  public ngOnInit() {
    this._initFormControl()
  }

  private _initFormControl() {
    this.formControl = (this.isDefaultColumn) ? new FormControl : new FormControl<string>(this.cellData?.data.toString());
  }
}
