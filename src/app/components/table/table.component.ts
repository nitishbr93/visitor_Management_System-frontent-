import { Component,OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


constructor(service:UserRegistrationService,private route :ActivatedRoute ){ }

users:any;
  ngOnInit(): void {
  this.router();
  }
  router(){
    // this.route.queryParams.subscribe((params:any)=>{
    //   console.log(params);
      
    //   this.users=params.data;
      
      
    // })

    // for (const user of this.users) {
    //   console.log(user.name);
    //  console.log(user.email);
    // }
    this.route.queryParams.subscribe(data=>{
      this.users=data;
    })
    //  for (const user of this.users) {
    //    console.log(user.name);
    //   console.log(user.email);
    //  }
  }


}
