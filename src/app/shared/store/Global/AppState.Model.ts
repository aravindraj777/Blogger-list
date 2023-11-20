import { BlogModel, Blogs } from "../Blog/Blog.model";
import { CounterModel } from "../counter.model";

export interface AppStateModel{
    counter:CounterModel,
    blog:Blogs
}