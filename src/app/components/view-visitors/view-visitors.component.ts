import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
@Component({
  selector: 'app-view-visitors',
  templateUrl: './view-visitors.component.html',
  styleUrls: ['./view-visitors.component.css']
})
export class ViewVisitorsComponent implements OnInit {

  constructor(private service:UserRegistrationService, private route:ActivatedRoute){ }
id:any;
users:any;
file:any
  ngOnInit(): void {

    this.id=this.route.snapshot.params['id'];
    this.service.getByid(this.id).subscribe(data=>{
      this.users=data;
    })

  

    
  }
  

}
