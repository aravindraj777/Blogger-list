
import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { MasterService } from "../../master.service"
import { LOAD_BLOG, LOAD_BLOG_SUCCESS, loadBlogFail, loadBlogSuccess } from "./Blog.action"
import { EMPTY, catchError, exhaustMap, map, of } from "rxjs"

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
                            return loadBlogSuccess({bloglist:data});

                        }),
                        catchError((_error) => of(loadBlogFail({ErrorText:_error})))
                    )
                })
            )
    );


}


