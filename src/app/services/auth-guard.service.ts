import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../interfaces/user.interface";
import { IAppState } from "../store/state/app.state";

@Injectable({
    providedIn: "root"
})
export class AuthGuardService implements CanActivate {
    constructor(private store: Store<IAppState>, private router: Router) {}

    canActivate(): Observable<boolean> {
        return this.store.pipe(
            select("user"),
            map((user: User) => {
                if (user.name !== "") {
                    return true;
                } else {
                    this.router.navigate(["/"]);
                    return false;
                }
            })
        );
    }
}
