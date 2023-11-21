import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/Blog.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  haveAccess(){
    return true
  }

  getAllBlogs():Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>('http://localhost:3000/Blogs')
  }
}
