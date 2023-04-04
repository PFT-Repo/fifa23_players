import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { dataInterface } from '../interfaces/dataInterface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  urlLink= environment.api_link;
  imgList:dataInterface[]=[];
  httpClient: any;
  constructor(private http: HttpClient) { 
    this.getImageships()
  }
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }),
  };
  
  getImageships() {
    if(!(this.imgList.length>1)){
     try {
      fetch(this.urlLink).then(response => response.json()).then(data => this.getImageList(data)
      ).catch((e)=> console.log("failed remote fetch, trying local")
      );
     } catch (error) {
      console.log(error);
     }
     try{
      if(!(this.imgList.length>1)){
        this.http.get("assets/data.json").subscribe((data) => { this.getImageList(data);});
       }
     }
     catch (error) {
      console.log(error);
      
     }
    
      
    }
    else{
    }
  }
  getImageList(any:any){
    this.imgList = any;
     console.log(this.imgList);
    return this.imgList;
  }

  getPlayer(id:any):dataInterface{
    if(!(this.imgList.length>1)){
    return <dataInterface> this.imgList.find((data) => data.name == id);
    }
    else{
      this.getImageships();
        return <dataInterface> this.imgList.find((data) => data.name == id);
    }
  }
}
