import { render, screen } from "@testing-library/react";
import { Button } from "@/components/Button";

describe("Button component", () => {
  it("should have children text", () => {
    render(<Button>children</Button>);

    const children = screen.getByText("children");

    expect(children).toBeInTheDocument();
  });
});
