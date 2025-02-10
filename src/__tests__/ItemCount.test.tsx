import ItemCount from "@/components/ItemCount";
import { render, screen } from "@testing-library/react";

describe("ItemCount component", () => {
  it("renders item name correctly", () => {
    // Arrange
    render(<ItemCount name={"Sample name"} count={2} />);
    const itemButton = screen.getByRole("status", {
      name: /item-count/i,
    });

    // Assert
    expect(itemButton).toHaveTextContent("Sample name count: 2");
  });
});
