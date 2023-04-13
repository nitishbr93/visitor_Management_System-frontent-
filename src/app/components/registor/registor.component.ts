 import { Component ,OnInit} from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
import {FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registor',
  templateUrl: './registor.component.html',
  styleUrls: ['./registor.component.css']
})
export class RegistorComponent implements OnInit {

  registerForm=new FormGroup({

    name:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
        email:new FormControl("",[Validators.required,Validators.email]),
        phone:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]*")]),
        address:new FormControl("",[Validators.required]),
        gender:new FormControl("",[Validators.required]),
        date:new FormControl("",[Validators.required]),
        password:new FormControl("",[Validators.required]),
        imageName:new FormControl("")

  })

  message:string=""
  message1:string=""
     
      constructor(private service:UserRegistrationService){ }

      ngOnInit(): void {
        
      }
      file:any;
      selectfile(event:any){
        console.log(event);
        this.file=event.target.files[0];
        console.log(this.file);
      }
      public onSubmit(){
        let formData=new FormData();
        formData.append('image',this.file);
        formData.append('value',JSON.stringify(this.registerForm.value))
     console.log(formData);
     
        let resp=this.service.registrationWithImage(formData);
        //         // console.log(resp);
                
                resp.subscribe({
                  next:data=>{
                    console.log(data);
                    
                      //  this.message=data.name
                  },error:err=>{
                    console.log(err.errors);
                    alert(err.name);
                    this.message=err;
                  }
                });
                console.log(this.message);
                this.message1="data inserted successfully"
                
        
        //       }
        // }
        
        
      }
    
get Names(): FormControl{
  return this.registerForm.get("name") as FormControl;
}
get Emails(): FormControl{
  return this.registerForm.get("email") as FormControl;
}
get Phones(): FormControl{
  return this.registerForm.get("phone") as FormControl;
}
get Addresss(): FormControl{
  return this.registerForm.get("address") as FormControl;
}
get Dates(): FormControl{
  return this.registerForm.get("date") as FormControl;
}
get Passwords(): FormControl{
  return this.registerForm.get("password") as FormControl;
}

get Genders(): FormControl{
  return this.registerForm.get("gender") as FormControl;
}



      // public onSubmit(){
      //   console.log(this.credential);
        
      //   let resp=this.service.doRegistration(this.credential);
      //   // console.log(resp);
        
      //   resp.subscribe({
      //     next:data=>{
      //          this.message= data
      //     },error:err=>{
      //       console.log(err.errors);
      //       alert(err.name);
      //       this.message=err;
      //     }
      //   });
      //   console.log(this.message.password);
        

      // }

     
}

//----------------------------------------------------------------------------------------------


// import { Component ,OnInit} from '@angular/core';
// import { UserRegistrationService } from 'src/app/services/user-registration.service';

// @Component({
//   selector: 'app-registor',
//   templateUrl: './registor.component.html',
//   styleUrls: ['./registor.component.css']
// })
// export class RegistorComponent implements OnInit {
//       credential={
//         name:'',
//         email:'',
//         phone:'',
//         address:'',
//         gender:'',
//         date:'',
//         password:''
//       }
//       message:any;
//      required='required';
//      name="nitish";
//      disable=false;
     
//       constructor(private service:UserRegistrationService){ }

//       ngOnInit(): void {
        
//       }
//       public onSubmit(){
//         console.log(this.credential);
        
//         let resp=this.service.doRegistration(this.credential);
//         // console.log(resp);
        
//         resp.subscribe({
//           next:data=>{
//                this.message= data
//           },error:err=>{
//             console.log(err.errors);
//             alert(err.name);
//             this.message=err;
//           }
//         });
//         console.log(this.message.password);
        

//       }
// }





