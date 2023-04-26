import { render, screen } from "@testing-library/react";
import ThemeProvider from "./ThemeProvider";

describe("ThemeProvider", () => {
  it("Should render theme provider correctly", () => {
    render(
      <ThemeProvider>
        <span>Child Component</span>
      </ThemeProvider>
    );

    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
