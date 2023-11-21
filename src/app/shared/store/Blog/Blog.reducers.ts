import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addBlog, deleteBlog, loadBlog, updateBlog } from "./Blog.action";
import { BlogModel } from "./Blog.model";

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
    }),
    on(updateBlog,(state,action)=>{
        const _blog = {...action.bloginput}
        const updatedBlog =  state.blogList.map(blog=>{
            return _blog.id  === blog.id ? _blog :blog;
        })
        return {
            ...state,
            blogList: updatedBlog
        }
    }),
    on(deleteBlog,(state,action)=>{
        const deletedBlog = state.blogList.filter((data:BlogModel)=>{
         return data.id !==action.id
        });
        return{
            ...state,
            blogList:deletedBlog
        }
    })
    )

 export function blogReducer(state:any,action:any){
    return _blogReducer(state,action)
 }   