import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ComponentsModule } from "../../components/components.module";

import { GameRoutingModule } from "./game-routing.module";
import { GameComponent } from "./game.component";

@NgModule({
    declarations: [GameComponent],
    imports: [
        CommonModule,
        ComponentsModule,
        GameRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class GameModule {}
