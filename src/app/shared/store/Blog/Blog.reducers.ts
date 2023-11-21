import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./Blog.state";
import { addBlog, loadBlog, loadBlogSuccess, updateBlog } from "./Blog.action";

const _blogReducer = createReducer(BlogState,
    on(loadBlog, (state) => {
        return {
            ...state
        }
    }),
    on(addBlog, (state, action) => {
        const _blog = { ...action.bloginput }
        _blog.id = state.blogList.length + 1
        return {
            ...state,
            blogList: [...state.blogList, _blog]
        }
    }),
    on(updateBlog, (state, action) => {
        const _blog = { ...action.bloginput }
        const updatedBlog = state.blogList.map(blog => {
            return _blog.id === blog.id ? _blog : blog;
        })
        return {
            ...state,
            blogList: updatedBlog
        }
    }),

    on(loadBlogSuccess,(state, action) => {

        return {
            ...state,
            blogList: [...action.bloglist]
        }
    })
)

export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action)
}   