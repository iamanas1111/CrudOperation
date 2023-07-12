import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getStudentDetail(){
    return this.http.get("http://localhost:8080/student/getAll");
  }
  

  StudentCandidate(data:any):Observable<Object[]>{
    return this.http.post<Object[]>("http://localhost:8080/student/add",data);
  }

  deleteStudent(id:Number):Observable<Object>{
    return this.http.delete("http://localhost:8080/student/deleteSingle/"+id);
  }
  

  getStudentDetailById(id:number):Observable<Object>{
    return this.http.get("http://localhost:8080/student/getById/"+id);
  }

  
}
