import { IconButtonComponent } from "./icon-button.component";
import { render, screen } from "@testing-library/angular";

describe("IconButtonComponent", () => {
    it("should create the IconButtonComponent", async () => {
        await render(IconButtonComponent);
    });

    it("should render the button label", async () => {
        await render(IconButtonComponent, {
            componentProperties: {
                label: "Button"
            }
        });

        expect(screen.getByText("Button")).not.toBeNull();
    });

    it("should render the icon", async () => {
        await render(IconButtonComponent, {
            componentProperties: {
                icon: "assets/imgs/steps.svg"
            }
        });

        const image = screen.getByAltText("icon") as HTMLImageElement;

        expect(image.src).toContain("assets/imgs/steps.svg");
    });
});
