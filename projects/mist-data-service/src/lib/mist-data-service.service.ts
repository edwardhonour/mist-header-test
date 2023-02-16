import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MistDataServiceService {
  
    @Input() config: any = { url: 'http://localhost:80/index0.php'}; 

    path: any; 
    url: any;
    t: any;
    uid: any;
    rnum: any;
  
    constructor(private http: HttpClient) { 
          this.path=this.config['url'];
    }
  
    getLocalStorage() {
      if (localStorage.getItem('uid')===null) {
        this.uid = 0;
      } else {
        this.uid = localStorage.getItem('uid');
      }
      if (localStorage.getItem('rnum')===null) {
        this.rnum = "";
      } else {
        this.rnum = localStorage.getItem('rnum');
      }
    }
  
    getData(path: any) {
      this.getLocalStorage();
      const data = {
         "q": path,           
         "uid": this.uid,
         "rnum": this.rnum,
         "sql": ""
      }
      console.log('BEFORE')
      console.log(data)
      this.t = this.http.post(this.url, data);
      return this.t; 
    }
   
    getDataSQL(sql: any) {
      this.getLocalStorage();
      const data = {
         "q": 'sql',           
         "uid": this.uid,
         "rnum": this.rnum,
         "sql": sql
      }
  
      this.t = this.http.post(this.url, data);
      console.log(this.t);
      return this.t; 
    }
  
    postStartup() {
      console.log('one');
      this.getLocalStorage();
      const data = {
        "q": "startup", 
        "uid": this.uid
      }
      console.log('two');
      this.t=this.http.post(this.url,data);
      console.log(this.t);
      return this.t;
  }
  
    postForm(formID: any, formData: any[]) {
        this.getLocalStorage();
        const data = {
          "q": formID, 
          "data": formData,
          "rnum": this.rnum,
          "uid": this.uid
        }
        this.t=this.http.post(this.url,data);
        return this.t;
    }
  
    postNothing(formID: any) {
      this.getLocalStorage();
      const formData = {
        uid: this.uid
      }
      const data = {
        "q": formID, 
        "data": formData,
        "rnum": this.rnum,
        "uid": this.uid
      }
      this.t=this.http.post(this.url,data);
      return this.t;
  }
  
  }
  