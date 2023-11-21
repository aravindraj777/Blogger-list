import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/store/Blog/Blog.action';
import { BlogModel } from 'src/app/shared/store/Blog/Blog.model';
import { getBlogById } from 'src/app/shared/store/Blog/Blog.selectors';
import { AppStateModel } from 'src/app/shared/store/Global/AppState.Model';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css']
})
export class AddblogComponent implements OnInit {

  pageTitle = ''
  editBlogId = 0
  editData! :BlogModel

  constructor(private dialogRef: MatDialogRef<AddblogComponent>, private builder: FormBuilder,
    private store: Store<AppStateModel>, @Inject(MAT_DIALOG_DATA) public data:any) { 
      console.log("constructor loaded")

    }
  ngOnInit(): void {
    console.log('ng on init loaded')
    console.log(this.data);
    this.pageTitle = this.data.title
    if (this.data.isEdit) {
      this.editBlogId = this.data.id;
      this.store.select(getBlogById(this.editBlogId)).subscribe(data => {
        this.editData = data
        this.blogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description
        })
      })

    }

  }

  closePopUp() {
    this.dialogRef.close()

  }

  blogForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    description: this.builder.control('', Validators.required)
  })

  saveBlogs() {
    if (this.blogForm.valid) {
      const _blogInput: BlogModel = {
        id: 0,
        title: this.blogForm.value.title as string,
        description: this.blogForm.value.description as string
      }

      if(this.data.isEdit){
        _blogInput.id = this.blogForm.value.id as number
        this.store.dispatch(updateBlog({bloginput:_blogInput}))
      }
      else{
        this.store.dispatch(addBlog({ bloginput: _blogInput }))
      }
      
      this.closePopUp();
    }
  }
}
