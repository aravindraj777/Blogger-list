import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./Blog.model";

export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG = '[blog page] load blog ';

export const loadBlogSuccess = createAction(LOAD_BLOG_SUCCESS,props<{bloglist:BlogModel[]}>())
export const loadBlog = createAction(LOAD_BLOG)
export const addBlog = createAction('addblog',props<{bloginput:BlogModel}>())
export const updateBlog = createAction('updateBlog',props<{bloginput:BlogModel}>())