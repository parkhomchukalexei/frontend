import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ClientData, CreateOnlyfansTable, OperatorData, Resp} from "../../shared/interfaces";
import {AuthService} from "../../services/authentification.service";
import {FormControl, FormGroup} from "@angular/forms";

import {TableDataService} from "../../services/table.service";
import {map, tap} from "rxjs";

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {

  public createTableForm: FormGroup<CreateOnlyfansTable>;
  public operator: any;
  public client: any;


  constructor(
    public dialogRef: MatDialogRef<CreateTableComponent>,
    public service: TableDataService,
    @Inject(MAT_DIALOG_DATA) public data: CreateOnlyfansTable
  ) {
  }

  ngOnInit() {
    this._initCreateTableForm();
    this._getUserAndClientInfo();
  }

  private _initCreateTableForm(){
    this.createTableForm = new FormGroup<CreateOnlyfansTable>(
      <CreateOnlyfansTable>{
        client: new FormControl<number>(+this.client, {nonNullable: false}),
        month: new FormControl<number>(0, {nonNullable: true}),
        operator: new FormControl<number>(this.operator, {nonNullable: false}),
        tableType: new FormControl<boolean>(true, {nonNullable: true})
      }
    )
  }


  private _getUserAndClientInfo(){
    this.service.getUserClientList()
      .subscribe(
        (data: Resp) => {
          this.operator = data.operator;
          this.client = data.client;
        }
      );
  }

  ngOnDestroy() {

  }

  onNoClick() {
    console.log(this.createTableForm.value.client)
    // @ts-ignore
    let data = this.createTableForm.value
      // month: +this.createTableForm.get('month'),
    // client: this.createTableForm.value.client?.id,
    // operator: this.createTableForm.value.operator?.id,
    // tableType: this.createTableForm.value.tableType}
    return this.service.createNewTable(data).subscribe(
      data => console.log(data)
    )
      }
}
