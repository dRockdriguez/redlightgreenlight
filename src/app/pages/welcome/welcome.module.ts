import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../../components/components.module";

import { WelcomeRoutingModule } from "./welcome-routing.module";
import { WelcomeComponent } from "./welcome.component";

@NgModule({
    declarations: [WelcomeComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        WelcomeRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class WelcomeModule {}
