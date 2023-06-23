import {Component, Inject, Input, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ClientProfile} from "../../shared/interfaces";
import {ClientListComponent} from "../client-list/client-list.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  public clientData: ClientProfile;

  constructor(private service: ClientService,
              @Inject(MAT_DIALOG_DATA) public data: any)
              {

  }

  ngOnInit(): void {
    this._getProfileData(this.data.id)
  }

  private _getProfileData(id: number){
    this.service.getClientProfile(id).subscribe(
      data => this.clientData = data
    )

  }
}
