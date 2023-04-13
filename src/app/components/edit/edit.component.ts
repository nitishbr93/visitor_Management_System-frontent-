import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id:any;
 credential={
    name:'',
    email:'',
    phone:0,
    address:'',
    gender:'',
    date:'',
    password:''
  }
  
  users:any;
  
  message:any;


  constructor(private service:UserRegistrationService, private route: ActivatedRoute){ }


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.service.getByid(this.id).subscribe((data=>{
      this.users=data;
      console.log(this.users);
      
    }))
   }

  //  onSubmit(){
  //   this.service.updateData
  //  }
  // public onSubmit(){
  //   console.log(this.credential);
  //  this.id= this.route.snapshot.params['id'];
  //   console.log(this.id);
    
    
  //   let resp=this.service.updateData(this.id,this.credential);
  //   console.log(resp);
  //   resp.subscribe((data)=>this.message=data);

  // }


  public onSubmit(){
    console.log(this.users);
   this.id= this.route.snapshot.params['id'];
    console.log(this.id);
    
    
    let resp=this.service.updateData(this.id,this.users);
    console.log(resp);
    resp.subscribe((data)=>this.message=data);

  }

}
