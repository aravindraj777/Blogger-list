import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from 'src/app/shared/store/Blog/Blog.model';
import { getBlog, getBlogInfo } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { AddblogComponent } from '../addblog/addblog.component';
import { connect } from 'rxjs';
import { loadBlog } from 'src/app/shared/store/Blog/Blog.action';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
 
  constructor(private store:Store<AppStateModel>,private dialog:MatDialog){
    console.log("constructor")
  }


  blogList!:BlogModel[]
  blogInfo!:Blogs
  ngOnInit(): void {
    this.store.dispatch(loadBlog())

   this.store.select(getBlogInfo).subscribe(item=>{
    // this.blogList = item;
    this.blogInfo = item
    console.log(this.blogList)
   })
  }

  addBlog(){
    this.openPopUp(0,'Add Blog');
  }

  openPopUp(id:any,title:any,isEdit=false){
    this.dialog.open(AddblogComponent,{
      width:'40%',
      data:{
        id:id,
        title:title,
        isEdit:isEdit
      }
    })
  }

  editBlog(id:any){
    this.openPopUp(id,'Edit Blog',true);
  }

}
