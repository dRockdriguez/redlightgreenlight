import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { InputComponent } from "./input/input.component";
import { MainButtonComponent } from "./main-button/main-button.component";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [InputComponent, MainButtonComponent, IconButtonComponent],
    exports: [InputComponent, MainButtonComponent, IconButtonComponent]
})
export class ComponentsModule {}
