import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {shortClientList} from "../../shared/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {ClientProfileComponent} from "../client-profile/client-profile.component";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  public clientList: shortClientList[];
  public id: number;

  constructor(public service: ClientService, public clientProfile: MatDialog) {
  }

  ngOnInit(): void {
    this._InitClientList()
  }

  private _InitClientList() {
    this.service.getClientList().subscribe(data => this.clientList = data)
  }

  public openProfile(id: number) {
    this.clientProfile.open(ClientProfileComponent, {
      data: {id: id.toString() }})
  }

}
