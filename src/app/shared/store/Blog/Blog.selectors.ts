import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./Blog.model";


const getBlogState = createFeatureSelector<Blogs>('blog');

export const getBlog = createSelector(getBlogState,(state)=>{
    return state.blogList
})

export const getBlogById = (blogId:number)=>createSelector(getBlogState,(state)=>{
    return state.blogList.find((blog:BlogModel)=>blog.id === blogId) as BlogModel
})