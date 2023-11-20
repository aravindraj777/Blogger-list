import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog } from 'src/app/shared/store/Blog/Blog.action';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent {

  constructor(private dialogRef:MatDialogRef<AddblogComponent>,private builder:FormBuilder,
    private store:Store<AppStateModel>){}

  closePopUp(){
    this.dialogRef.close()

  }

  blogForm = this.builder.group({
    id:this.builder.control(0),
    title:this.builder.control('',Validators.required),
    description:this.builder.control('',Validators.required)
  })

  saveBlogs(){
    if(this.blogForm.valid){
      const _blogInput:BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }

      this.store.dispatch(addBlog({bloginput:_blogInput}))
      this.closePopUp();
    }
  }
}
