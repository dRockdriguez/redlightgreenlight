import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";
import { InputErrors } from "../../interfaces/inputErrors.interface";

@Component({
    selector: "app-input",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
        }
    ]
})
export class InputComponent implements ControlValueAccessor {
    @Input() label = "";
    @Input() controlName = "";
    @Input() placeholder = "";
    @Input() errors: string[];

    value = "";

    onChange = (_: any) => {
        this.writeValue(this.value);
    };
    onTouch = () => {};
    onInput(input: any) {
        this.value = input?.target?.value;
        this.onTouch();
        this.onChange(this.value);
    }

    writeValue(value: any): void {
        if (value) {
            this.value = value || "";
        } else {
            this.value = "";
        }
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }
}
