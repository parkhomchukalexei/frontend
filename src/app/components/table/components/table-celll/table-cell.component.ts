import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITableDay} from "../../table.component";
import {FormControl, Validators} from "@angular/forms";
import {TableCellService} from "../../../../services/tabledata.service";
import {state, style, trigger} from "@angular/animations";
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";
// import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.css'],
  // animations: [
  //   trigger('cellChanged',[
  //       state('default', style({background: 'white'})),
  //       state('success',style({background: 'green'})),
  //     ])
  //   ]

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

  // public animationState = 'default'

  public onDoubleClick() {
    this.showInput = true;
  }

  protected readonly document = document;

  public onEnter() {
    if( this.cellData != undefined){
      this.service.patch_table_cell(this.cellData.id, this.formControl.value)
      // this.animationState = 'success'
    }
    else{
      let newCell  = this.service.create_new_table_cell(this.tableId, this.day, this.formControl.value)
      console.log(this.formControl.value)
      // this.animationState = 'success'
    }
    this.cellData
    this.showInput = false;

    //тут как отобржатаь новую кнопку
    this.cellData["data"] = +this.formControl.value;

  }

  public ngOnInit() {
    this._initFormControl()
  }

  public ngOnChanges(){
    console.log('HUI')
  }

  private _initFormControl() {
    this.formControl = (this.isDefaultColumn) ? new FormControl : new FormControl<string>(this.cellData?.data.toString(), [Validators.required, Validators.pattern('^[0-9]*[.,]?[0-9]+$')]);
  }
}
