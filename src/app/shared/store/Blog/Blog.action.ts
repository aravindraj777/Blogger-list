import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const loadBlog = createAction('loadblog')
export const addBlog = createAction('addblog',props<{bloginput:BlogModel}>())
export const updateBlog = createAction('updateBlog',props<{bloginput:BlogModel}>())
export const deleteBlog = createAction('deleteBlog',props<{id:number}>())