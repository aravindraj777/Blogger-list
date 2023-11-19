import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { loadBlog } from "./Blog.action";

const _blogReducer = createReducer(BlogState,
    on(loadBlog,(state)=>{
        return{
            ...state
        }
    })
    )

 export function blogReducer(state:any,action:any){
    return _blogReducer(state,action)
 }   