import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-add-visitors',
  templateUrl: './add-visitors.component.html',
  styleUrls: ['./add-visitors.component.css']
})
export class AddVisitorsComponent implements OnInit{


  constructor(private service:UserRegistrationService,private router:Router){}

  ngOnInit(): void {
    
  }

users:any;
datas:any
  getByMobileNumber(val:any){
    if(typeof val=='number' || val>0){

      let resp= this.service.getSearchData(val);
      resp.subscribe(data=>this.users=data);
        
      if(this.users.length=0){
        this.table();
      }
      // this .table();
    }
    else{
      alert("Enter values");
    }

  //  console.log(this.users);
       
    }
    table(){

      
      // if(this.users.length==0){
      //   console.log("hiiiiii");
       alert("No record Found")

       this.router.navigate(['/registor'])
      //  }
        
    }

    public updateCredintial(id:number){
      this.router.navigate(['edit',id] );
     }

     public deletecredential(id:number){
      console.log(id);
      let resp=this.service.deleteUser(id);
      alert("Deleted Successfully") 
     }
     public viewData(id:number){
      this.router.navigate(['view',id])
     }


  
  }



  


