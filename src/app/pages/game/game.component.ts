import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { SetUserLogged } from "../../store/actions/user.actions";
import { User } from "../../interfaces/user.interface";
import { IAppState } from "../../store/state/app.state";
import { Router } from "@angular/router";
import { UsersService } from "../../services/users.service";

const RED_LIGHT_DURATION_IN_MILLISECONDS = 3000;

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.scss"]
})
export class GameComponent {
    public user: User;
    public semaphoreOpened = false;

    private prevStep = "";

    constructor(
        private store: Store<IAppState>,
        private router: Router,
        private usersService: UsersService
    ) {
        this.store.select("user").subscribe((user: User) => {
            this.user = { ...user };
        });

        this.redLightTimer();
    }

    exit() {
        const user = {
            name: "",
            points: 0,
            highScore: 0
        };
        // guardar
        this.usersService.save({
            name: this.user.name,
            highScore: this.user.highScore,
            points: 0
        });
        this.store.dispatch(new SetUserLogged(user));
        this.router.navigate([""]);
    }

    clickAction(action: string) {
        if (!this.semaphoreOpened) {
            this.user.points = 0;
            return;
        }
        if (this.prevStep !== action) {
            this.user.points++;
            this.prevStep = action;
        } else if (this.user.points > 0) {
            this.user.points--;
        }

        if (this.user.highScore < this.user.points) {
            this.user.highScore = this.user.points;
        }
    }

    private redLightTimer() {
        setTimeout(() => {
            this.semaphoreOpened = !this.semaphoreOpened;
            this.greenLightTimer();
        }, RED_LIGHT_DURATION_IN_MILLISECONDS);
    }

    private greenLightTimer() {
        setTimeout(() => {
            this.semaphoreOpened = !this.semaphoreOpened;
            this.redLightTimer();
        }, this.greenLightDuration());
    }

    private greenLightDuration() {
        return (
            Math.max(10000 - this.user.points * 100, 2000) +
            (Math.random() * (1500 - -1500) + -1500)
        );
    }
}
