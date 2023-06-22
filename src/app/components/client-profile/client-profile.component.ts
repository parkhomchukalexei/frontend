import {Component, Inject, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ClientProfile} from "../../shared/interfaces";
import {ClientListComponent} from "../client-list/client-list.component";
import {MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  public clientData: ClientProfile;
  private aSub: Subscription;
  constructor(private service: ClientService, public dialogRef: MatDialogRef<ClientProfileComponent>)
              // @Inject(ClientListComponent) public id: number)
              {

  }

  ngOnInit(): void {
    this._getProfileData(2)
    console.log(this.clientData)
  }

  private _getProfileData(id: number){
    this.service.getClientProfile(id).subscribe(
      data => this.clientData = data
    )

  }
}
