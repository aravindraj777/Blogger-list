import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel } from "./Blog.model";


const getBlogState = createFeatureSelector<BlogModel[]>('blog');

export const getBlog = createSelector(getBlogState,(state)=>{
    return state
})