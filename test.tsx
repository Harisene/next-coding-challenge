import Home from "@/app/page";
import ItemProvider from "@/providers/ItemProvider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />, { wrapper: ItemProvider });
  });

  it("renders an empty basket", () => {
    // Arrange
    const basketButton = screen.getByRole("button", {
      name: /Basket:/i,
    });

    // Assert
    expect(basketButton).toHaveTextContent("Basket: 0 items");
  });

  it("renders a basket with 1 item", async () => {
    // Arrange
    const user = userEvent.setup();
    const buttons = screen.getAllByRole("button", {
      name: /Add to basket/i,
    });

    // Act
    await user.click(buttons[0]);

    // Assert
    const basketButton = screen.getByRole("button", {
      name: /Basket:/i,
    });
    expect(basketButton).toHaveTextContent("Basket: 1 items");
  });

  it("renders a basket with 1 of item 1 and 2 of item 2", async () => {
    // Arrange
    const user = userEvent.setup();
    const buttons = screen.getAllByRole("button", {
      name: /Add to basket/i,
    });

    // Act
    await user.click(buttons[0]);
    await user.click(buttons[1]);
    await user.click(buttons[1]);

    // Assert
    const basketButton = screen.getByRole("button", {
      name: /Basket:/i,
    });
    expect(basketButton).toHaveTextContent("Basket: 3 items");
  });
});
