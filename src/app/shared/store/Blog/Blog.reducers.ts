import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addBlog, loadBlog } from "./Blog.action";

const _blogReducer = createReducer(BlogState,
    on(loadBlog,(state)=>{
        return{
            ...state
        }
    }),
    on(addBlog,(state,action)=>{
        const _blog = {...action.bloginput}
        _blog.id = state.blogList.length+1
        return{
            ...state,
            blogList:[...state.blogList,_blog]
        }
    })
    )

 export function blogReducer(state:any,action:any){
    return _blogReducer(state,action)
 }   