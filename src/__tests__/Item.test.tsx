import Item from "@/components/Item";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Item component", () => {
  const mockFunction = jest.fn();
  const props = { index: 0, name: "Sample Item Name", onClick: mockFunction };

  it("renders item name correctly", () => {
    // Arrange
    render(<Item {...props} />);
    const itemButton = screen.getByRole("button", {
      name: /Add to basket/i,
    });

    // Assert
    expect(itemButton).toHaveTextContent("Sample Item Name");
  });

  it("triggers on onClick", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Item {...props} />);
    const itemButton = screen.getByRole("button", {
      name: /Add to basket/i,
    });

    // Act
    await user.click(itemButton);

    // Assert
    expect(mockFunction).toHaveBeenCalled();
  });
});
