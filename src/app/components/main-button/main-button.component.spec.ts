import { MainButtonComponent } from "./main-button.component";
import { render, screen } from "@testing-library/angular";

describe("MainButtonComponent", () => {
    it("should create the MainButtonComponent", async () => {
        await render(MainButtonComponent);
    });

    it("should render the button label", async () => {
        await render(MainButtonComponent, {
            componentProperties: {
                label: "Button"
            }
        });

        expect(screen.getByText("Button")).not.toBeNull();
    });

    it("should set the correct type to the button", async () => {
        await render(MainButtonComponent, {
            componentProperties: {
                type: "submit",
                label: "Button"
            }
        });

        const btn = screen.getByText("Button");

        expect(btn).toHaveProperty("type", "submit");
    });
});
