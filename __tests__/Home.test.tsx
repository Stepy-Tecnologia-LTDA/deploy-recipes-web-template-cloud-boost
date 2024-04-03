import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home component", () => {
  it("should have deploy recipes text", () => {
    render(<Home />);

    const text = screen.getByText("Deploy Recipes");

    expect(text).toBeInTheDocument();
  });
});
