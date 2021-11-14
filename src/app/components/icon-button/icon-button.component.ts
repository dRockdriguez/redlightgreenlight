import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-icon-button",
    templateUrl: "./icon-button.component.html",
    styleUrls: ["./icon-button.component.scss"]
})
export class IconButtonComponent {
    @Input() label = "";
    @Input() icon = "";
    @Input() action = "";
    @Output() clicked = new EventEmitter<string>();

    clickEv() {
        this.clicked.emit(this.action);
    }
}
