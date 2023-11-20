import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getBlog } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
 
  constructor(private store:Store<AppStateModel>,private dialog:MatDialog){}


  blogList!:BlogModel[]
  ngOnInit(): void {
   this.store.select(getBlog).subscribe(item=>{
    this.blogList = item;
    console.log(this.blogList)
   })
  }

  addBlog(){
    this.openPopUp();
  }

  openPopUp(){
    this.dialog.open(AddblogComponent,{
      width:'40%'
    })
  }

}
