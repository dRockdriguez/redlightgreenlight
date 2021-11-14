import { InputComponent } from "./input.component";
import { render, screen } from "@testing-library/angular";

describe("InputComponent", () => {
    it("should create the InputComponent and render the errors, label and placeholder", async () => {
        await render(InputComponent, {
            componentProperties: {
                label: "input",
                controlName: "A",
                placeholder: "placeholder",
                errors: ["The field is required."]
            }
        });

        expect(screen.getByText("The field is required.")).not.toBeNull();
        expect(screen.getByPlaceholderText("placeholder")).not.toBeNull();
        expect(screen.getByText("input")).not.toBeNull();
    });
});
