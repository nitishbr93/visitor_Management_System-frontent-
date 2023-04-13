import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService implements OnInit {
baseUrl="api"
  constructor(private http:HttpClient) { }

  public doRegistration(credential: any){
    console.log("hiiiiii");
    console.log(credential);
      return this.http.post(this.baseUrl+"/visitor",credential ,{responseType:'text'as 'json'})
  }
  public registrationWithImage(FormData:any){
    return this.http.post(this.baseUrl+"/uploadImage",FormData);
  }

  public getUsers(){
    console.log("hiiiiiiiiii");
    
    return this.http.get(this.baseUrl+"/visitor")
  }

  public deleteUser(id:any){
    console.log("id"+id);
    
    return this.http.delete(this.baseUrl+"/visitor/"+id);
  }

  public getByEmail({email}:{email:any}){
    console.log(email);
    
    return this.http.get(this.baseUrl+"/visitor/"+email);
  }
  public getByid(id:number){
    return this.http.get(this.baseUrl+"/visitorid/"+id)
  }
  // public updateData(id:number,credential:any){
  //   return this.http.put("/visitor/"+id,credential ,{responseType:'text'as 'json'});
  // }

  public updateData(id:number,users:any){
    return this.http.put(this.baseUrl+"/visitor/"+id,users ,{responseType:'text'as 'json'});
  }
  


  //---------------------------------------------------

  getAllPosts(page:number,tableSize:number,field:string): Observable<any> {
    console.log("service page");
    // console.log(page);
    // console.log(tableSize);
    //  let value= this.http.get("/page?pageNumber="+page+"&pageSize="+tableSize);
    // console.log("return value");
      
    // console.log(value);

    let value=this.http.get(this.baseUrl+"/paginationwithsort?pageNumber="+page+"&pageSize="+tableSize+"&field="+field)
    
    return value;
  }
  

  getSearchData(searchData:any){
    return this.http.get(this.baseUrl+"/api/search/"+searchData);
  }
  getByDateRange(StartingDate:string,EndingDate:string){
    return this.http.get(this.baseUrl+"/api/range/"+StartingDate+"/"+EndingDate);
  }

// advance search

advanceSearch(name:string,email1:string,date:string,password:string){
  return this.http.get(this.baseUrl+"/api/advanceSearch?name="+name+"&email="+email1+"&date="+date+"&password="+password)
}

  

  ngOnInit(): void {
    
  }
}
