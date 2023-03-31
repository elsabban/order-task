import { Component, OnInit } from '@angular/core';
import { GetService } from 'src/app/utilities/services/get.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  constructor(private getServ:GetService) {
    }

  ngOnInit(): void {
    // http get users data
    this.getServ.get('users.json').subscribe(
      (res) => {
        console.log(res)
      }
    )
  }  
}