import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from 'src/app/services/user-registration.service';
// import{debounceTime} from 'rxjs/operators';

// import { Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.css']
})
export class VisitorsComponent implements OnInit{

// !--------------------------------------------
timer:any
sendData(val:any){
  // console.log(val);
  
  clearTimeout(this.timer);
  this.timer=setTimeout(()=>{
    let resp=this.service.getSearchData(val);
    resp.subscribe(data=>this.users=data);
    console.log(val);
    // this.ngOnInit();
    
  },700)
}



// !--------------------------------------------------


title='pagination';
   page: any =0;
    tableSize: number =3;
 pages:number=1;

//  search by date range

StartingDate:string="";
EndingDate:string="";
 dateRange(val1:string,val2:string){
this.StartingDate=val1;
this.EndingDate=val2;
console.log(`startins date ${this.StartingDate} and ending date ${this.EndingDate}`);
let resp=this.service.getByDateRange(this.StartingDate,this.EndingDate);
resp.subscribe(data=>this.users=data);

 }

//  advance search
name:string=""
email1:string=""
date:string=""
password:string=""

advanceSearch(val1:string,val2:string,val3:string,val4:string,){
   this.name=val1;
   this.email1=val2;
   this.date=val3;
   this.password=val4;
   console.log(`name: ${this.name},email: ${this.email1},date: ${this.date},password: ${this.password}`);
    let resp= this.service.advanceSearch(this.name,this.email1,this.date,this.password);
    resp.subscribe(data=>this.users=data)
   
}


  onTableDataChange(event: any) {
    console.log(event);
    
    this.page = event;
    console.log(this.page);
    // console.log(this.tableSize);
    
    
    this.ngOnInit();
    // this.searchPage();
  }
  tE:any;
  tP:any;
  asd:any;
  arr:Array<number>=[];
  Search:any;
  default:any;
searchData:any;

  // getData(val:any){
  //   this.searchData=val;
  //   console.log(this.searchData);
    
  //   let resp=this.service.getSearchData(this.searchData);
  //   resp.subscribe(data=>this.users=data);

      
  // }

// dataSearch(){
//   // this.page=this.Search-1;
//   this.service.getAllPosts(this.Search-1,4).subscribe(data=>this.users=data.content)
// }

dataSearch(val:any){
  this.pages=val;
  this.page=val-1
let res=  this.service.getAllPosts(this.page,4,this.field);
res.subscribe(data=>this.users=data.content);
this.ngOnInit();

}

  pagesi(){
    console.log(this.asd)
    this.tableSize=this.asd;
    this.service.getAllPosts(this.page,this.tableSize,this.field).subscribe(data=>{
      this.users=data.content;})
  }

  nextprev(type:string){
    console.log(this.page);
    if(this.page>0 && this.tP-1>this.page){
        type==='add' ? this.page++ :this.page--;
      }
      else{
        type==='add' ? this.page=1 :this.page=0;
      }
      this.pages=this.page+1;
      console.log(this.tE);
      
      
      this.ngOnInit();
  }

  field:string="date"
size:number=0;
  searchPage(){
    console.log("seach page");
     let resp=this.service.getAllPosts(this.page,this.tableSize,this.field);
     resp.subscribe(data=>{
      this.users=data.content;
      console.log(data);
      this.page=data.pageable.pageNumber
      this.tableSize=data.pageable.pageSize
      this.tE=data.totalElements
      this.tP=data.totalPages
      this.size=data.size;
      for(let a=1;a<=this.tP;a++){
        this.arr.push(a);
      }
      // this.pages=data.totalPages;
      // this.pages=3;
     })
     this.arr=[];
     console.log(this.users);
     console.log(this.pages); 
     console.log(this.tP);
     
  }

  setPage(){
    // event.prevendDefault();
    console.log(`page ${this.page} and pages ${this.pages}`);
this.searchPage();
  }

  users:any;
  email:any;
  searchText:any;
// delete credintails

  public deletecredential(id:number){
    console.log(id);
    let resp=this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data); 
    // this.nextprev();
    this.searchPage();

  }

  // get data by email 

  public getByEmail(){
    let res=this.service.getByEmail({email:this.email});
    res.subscribe((data)=>this.users=data);
  }


  constructor(private service:UserRegistrationService,private router:Router){ }
// ngOnInit
  ngOnInit(): void {
    // let resp=this.service.getUsers();
    // resp.subscribe((data)=>this.users=data); 
      this.searchPage();

     
  }

  //update data

 public updateCredintial(id:number){
  this.router.navigate(['edit',id] );
 }

//  status
today= new Date();
changeDate:any;
changeFormat:any=new DatePipe('en-IN').transform(this.today,'YYYY-MM-dd');
check:boolean=true;


}