import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { SetUserLogged } from "../../store/actions/user.actions";
import { UsersService } from "../../services/users.service";

@Component({
    selector: "app-welcome",
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent {
    loginForm: FormGroup;

    formFields = [
        {
            label: "Name *",
            placeholder: "Your name...",
            formControlName: "name",
            validators: [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(10)
            ],
            errorMessages: {
                required: "The field is required.",
                maxlength: "The maxlength is 10",
                minlength: "The minlenght is 3"
            }
        }
    ];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private store: Store<IAppState>,
        private usersService: UsersService
    ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({});
        for (const field of this.formFields) {
            this.loginForm.addControl(
                field.formControlName,
                new FormControl("", field.validators)
            );
        }
    }

    login() {
        if (!this.loginForm.invalid) {
            let user = this.usersService.getUser(this.loginForm.get("name")?.value);
            if (!user) {
                user = {
                    name: this.loginForm.get("name")?.value,
                    points: 0,
                    highScore: 0
                };
                this.usersService.save(user);
            }
            this.store.dispatch(new SetUserLogged(user));
            this.router.navigate(["/game"]);
        }
    }

    getErrors(controlName: string): string[] {
        if (
            this.loginForm.controls[controlName].invalid &&
            (this.loginForm.controls[controlName].dirty ||
                this.loginForm.controls[controlName].touched)
        ) {
            const field = this.formFields.find(
                (field) => field.formControlName === controlName
            );
            if (field) {
                const showErrors: string[] = [];
                const inputErrors = this.loginForm.controls[controlName].errors;
                const errs = Object.keys(field?.errorMessages);
                for (const e of errs) {
                    if (inputErrors && inputErrors[e]) {
                        showErrors.push(field?.errorMessages[e]);
                    }
                }
                return showErrors;
            }
        }

        return [];
    }
}
