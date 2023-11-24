
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { MasterService } from "../../master.service"
import { LOAD_BLOG, LOAD_BLOG_SUCCESS, addBlog, addBlogSuccess, loadBlogFail, loadBlogSuccess } from "./Blog.action"
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs"
import { BlogModel } from "./Blog.model"

@Injectable()
export class BlogEffects {

    constructor(private action$: Actions, private service: MasterService) { }

    _blog = createEffect(() =>
        this.action$
            .pipe(
                ofType(LOAD_BLOG),
                exhaustMap((action) => {
                    return this.service.getAllBlogs().pipe(
                        map((data) => {
                            return loadBlogSuccess({ bloglist: data });

                        }),
                        catchError((_error) => of(loadBlogFail({ ErrorText: _error })))
                    )
                })
            )
    );

    _addBlog = createEffect(() =>
        this.action$
            .pipe(
                ofType(addBlog),
                exhaustMap((action) => {
                    return this.service.createBlog(action.bloginput).pipe(
                        map((data) => {
                            return addBlogSuccess({ bloginput: data as BlogModel})
                        }),
                        catchError((_error) => of(loadBlogFail({ ErrorText: _error })))
                    )
                })
            )
    );




}


