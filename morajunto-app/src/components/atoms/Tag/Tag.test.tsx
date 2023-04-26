import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag", () => {
  it("Should render tag correctly", () => {
    render(<Tag label="Bedroom" type="bedroom" />);

    expect(screen.getByText(/bedroom/i)).toBeInTheDocument();
  });
});
