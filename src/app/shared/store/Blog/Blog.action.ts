import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG = '[blog page] load blog ';
export const LOAD_BLOG_FAILURE = '[blog page] load blog failure';
export const ADD_BLOG_SUCCESS = '[blog page] add blog success'; 
export const ADD_BLOG = '[blog page] add blog' 

export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS,props<{bloglist:BlogModel[]}>())
export const loadBlog = createAction(LOAD_BLOG)
export const addBlog = createAction(ADD_BLOG,props<{bloginput:BlogModel}>())
export const updateBlog = createAction('updateBlog',props<{bloginput:BlogModel}>())
export const loadBlogFail = createAction(LOAD_BLOG_FAILURE,props<{ErrorText:any}>())
export const addBlogSuccess = createAction(ADD_BLOG_SUCCESS,props<{bloginput:BlogModel}>()) 